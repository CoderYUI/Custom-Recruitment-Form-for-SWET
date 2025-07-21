import os
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timezone
import threading
import time
import requests

app = Flask(__name__)

# --- CORS CONFIGURATION ---
default_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://swet-recruitment-form.vercel.app"
]
allowed_origins = os.environ.get("ALLOWED_ORIGINS")
if allowed_origins:
    origins = [o.strip() for o in allowed_origins.split(",")]
else:
    origins = default_origins

CORS(
    app,
    origins=origins,
    supports_credentials=True,
    allow_headers=["Content-Type", "Authorization"],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
)

app.secret_key = os.environ.get("FLASK_SECRET_KEY")
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True

MONGO_URI = os.environ.get("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["CUSTOM_RECRUITMENT_FORM"]
applications_collection = db["applications"]

ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD")

# Helper to convert ObjectId to string
def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc

# Create (Frontend POSTs all form data here)
@app.route('/api/submit', methods=['POST'])
def submit_application():
    data = request.json
    # Basic validation for required fields
    required_fields = ["name", "emailId", "contactNumber", "universityCollege", "yearOfStudy", "stateCityUniversity", "resumeUrl", "instagramId", "linkedinId", "currentGpa", "specialization", "interestedDepartments"]
    missing = [f for f in required_fields if not data.get(f)]
    if missing:
        return jsonify({"error": f"Missing required fields: {', '.join(missing)}"}), 400

    # Add timezone-aware UTC timestamp
    data["createdAt"] = datetime.now(timezone.utc)
    # Insert into MongoDB
    result = applications_collection.insert_one(data)
    return jsonify({"success": True, "inserted_id": str(result.inserted_id)}), 201

# Read all
@app.route('/api/applications', methods=['GET'])
def get_applications():
    applications = list(applications_collection.find())
    applications = [serialize_doc(app) for app in applications]
    return jsonify(applications)

# Read single
@app.route('/api/applications/<id>', methods=['GET'])
def get_application(id):
    application = applications_collection.find_one({"_id": ObjectId(id)})
    if application:
        return jsonify(serialize_doc(application))
    else:
        return jsonify({"error": "Not found"}), 404

# Update
@app.route('/api/applications/<id>', methods=['PUT'])
def update_application(id):
    data = request.json
    result = applications_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
    if result.modified_count:
        return jsonify({"success": True, "updated_id": id})
    else:
        return jsonify({"error": "Update failed or no changes made"}), 400

# Delete
@app.route('/api/applications/<id>', methods=['DELETE'])
def delete_application(id):
    result = applications_collection.delete_one({"_id": ObjectId(id)})
    if result.deleted_count:
        return jsonify({"success": True, "deleted_id": id})
    else:
        return jsonify({"error": "Delete failed"}), 400

@app.route('/api/applications/by-email-contact', methods=['POST'])
def get_application_by_email_contact():
    data = request.json
    email = data.get('emailId')
    contact = data.get('contactNumber')
    if not email or not contact:
        return jsonify({"error": "Email and contact number required"}), 400
    app_doc = applications_collection.find_one({
        "emailId": email,
        "contactNumber": contact
    })
    if not app_doc:
        return jsonify({"error": "Not found"}), 404
    return jsonify(serialize_doc(app_doc)), 200

@app.route('/api/applications/<id>/payment-success', methods=['POST'])
def update_payment_success(id):
    data = request.json
    payment_id = data.get('razorpayPaymentId', '')
    result = applications_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": {"paymentStatus": "success", "razorpayPaymentId": payment_id}}
    )
    if result.modified_count:
        return jsonify({"success": True})
    else:
        return jsonify({"error": "Update failed"}), 400

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    password = data.get('password')
    if password == ADMIN_PASSWORD:
        session['admin_logged_in'] = True
        return jsonify({"success": True})
    return jsonify({"success": False, "error": "Invalid password"}), 401

@app.route('/api/admin/logout', methods=['POST'])
def admin_logout():
    session.pop('admin_logged_in', None)
    return jsonify({"success": True})

@app.route('/api/admin/applications', methods=['GET'])
def admin_get_applications():
    if not session.get('admin_logged_in'):
        return jsonify({"error": "Unauthorized"}), 401
    applications = list(applications_collection.find())
    applications = [serialize_doc(app) for app in applications]
    return jsonify(applications)

@app.route('/')
def home():
    return "SWET Recruitment Flask API with MongoDB is running!"


def keep_alive_ping():
    """
    Periodically ping the backend itself to prevent Render free service from sleeping.
    """
    url = os.environ.get("KEEP_ALIVE_URL") or "https://swet-recruitment-form.onrender.com"
    while True:
        try:
            requests.get(url, timeout=10)
        except Exception:
            pass
        time.sleep(600)  # Ping every 10 minutes

if os.environ.get("RENDER", "false").lower() == "true":
    threading.Thread(target=keep_alive_ping, daemon=True).start()

if __name__ == "__main__":
    app.run(debug=True)
