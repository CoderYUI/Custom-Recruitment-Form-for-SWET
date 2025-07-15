# SWET Recruitment Backend

This backend is built with **Flask** and **MongoDB** to support the SWET Recruitment Form. It handles form submissions, payment status, and stores all applicant and transaction data.

---

## Tech Stack

- **Backend Framework:** Flask (Python)
- **Database:** MongoDB (NoSQL)
- **Payment Gateway:** Razorpay (India)
- **API Format:** JSON REST API

---

## Database Design

### MongoDB Collections

#### 1. `applications`
Each document represents a single applicant's submission.

**Sample Document:**
```json
{
  "_id": ObjectId,
  "name": "John Doe",
  "contactNumber": "9876543210",
  "emailId": "john@example.com",
  "universityCollege": "ABC University",
  "yearOfStudy": "3rd Year",
  "stateCityUniversity": "Delhi",
  "resumeUrl": "https://...",
  "instagramId": "https://...",
  "linkedinId": "https://...",
  "currentGpa": "8.5",
  "specialization": "Software Development",
  "interestedDepartments": ["TECHNICAL", "RESEARCH"],
  "roleSpecificFields": {
    "technicalProgrammingLanguages": "...",
    "technicalGithubPortfolio": "...",
    "technicalProblemSolvingExperience": "...",
    // ...other dynamic fields
  },
  "paymentStatus": "success" | "failed",
  "razorpayPaymentId": "pay_xxxxxxxx",
  "createdAt": ISODate
}
```

---

## API Endpoints

### 1. Submit Application

- **Route:** `POST /api/submit`
- **Description:** Accepts all form data (including payment status and Razorpay payment ID).
- **Request Body:** JSON (see above sample document)
- **Response:** `{ "success": true }` or error message

### 2. (Optional) Get All Applications

- **Route:** `GET /api/applications`
- **Description:** Returns all applications (admin use).
- **Response:** Array of application documents.

---

## Payment Integration

- **Gateway:** Razorpay
- **Frontend:** Handles payment and sends `paymentStatus` (`success` or `failed`) and `razorpayPaymentId` to backend.
- **Backend:** Stores payment status and transaction ID with each application.


