from flask import Flask, request, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__)

# Replace with your actual MongoDB connection string from MongoDB Atlas
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://aggarwalbhuvika17:18283884_Bh@cluster0.ul32bi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

client = MongoClient(MONGO_URI)
db = client["CUSTOM_RECRUITMENT_FORM"]  # Or your actual db name

@app.route('/api/submit', methods=['POST'])
def submit_application():
    data = request.json
    db.applications.insert_one(data)
    return jsonify({"success": True})

@app.route('/api/applications', methods=['GET'])
def get_applications():
    applications = list(db.applications.find({}, {"_id": 0}))
    return jsonify(applications)

@app.route('/')
def home():
    return "Flask server is running!"
# ...existing code...

if __name__ == "__main__":
    app.run(debug=True)
    # ...existing code...
try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
    client.server_info()  # Force connection on a request as the connect=True parameter of MongoClient seems to be useless here
    db = client["CUSTOM_RECRUITMENT_FORM"]
except Exception as e:
    print("MongoDB connection error:", e)
    db = None
# ...existing code...

