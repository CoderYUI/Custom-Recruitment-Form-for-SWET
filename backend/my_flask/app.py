from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from config import MONGO_URI

app = Flask(__name__)
CORS(app)

client = MongoClient(MONGO_URI)
db = client["CUSTOM_RECRUITMENT_FORM"]
applications_collection = db["applications"]

# Helper to convert ObjectId to string
def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc

# Create
@app.route('/api/submit', methods=['POST'])
def submit_application():
    data = request.json
    if not data.get("name") or not data.get("emailId"):
        return jsonify({"error": "Missing required fields"}), 400

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

@app.route('/')
def home():
    return "Flask CRUD API with MongoDB is running!"

if __name__ == "__main__":
    app.run(debug=True)


{
  "success": true,
  "inserted_id": "someObjectId"
}
