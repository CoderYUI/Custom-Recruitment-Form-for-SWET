// src/components/StudyDetails.jsx
import React from 'react';

const StudyDetails = ({ formData, handleInputChange }) => {
  return (
    <div className="info-box">
      <h3 className="info-box-title">Academic Information</h3>

      <div className="form-field-group">
        <label htmlFor="yearOfStudy" className="form-label">
          Year of Study: <span className="required-asterisk">*</span>
        </label>
        <input
          type="text" 
          id="yearOfStudy"
          name="yearOfStudy"
          className="input-style"
          placeholder="e.g., 2nd Year, Final Year"
          value={formData.yearOfStudy}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="stateCityUniversity" className="form-label">
          State/City of University/College: <span className="required-asterisk">*</span>
        </label>
        <input
          type="text"
          id="stateCityUniversity"
          name="stateCityUniversity"
          className="input-style"
          placeholder="e.g., Madhya Pradesh / Bhopal"
          value={formData.stateCityUniversity}
          onChange={handleInputChange}
          required
        />
      </div>

      {}
      <h3 className="info-box-title connect-heading">Other General Details:</h3>

      <div className="form-field-group">
        <label htmlFor="resumeUrl" className="form-label">
          Resume URL:
        </label>
        <input
          type="url"
          id="resumeUrl"
          name="resumeUrl"
          className="input-style"
          placeholder="e.g., https://linkedin.com/in/yourprofile"
          value={formData.resumeUrl || ''}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="instagramId" className="form-label">
          Instagram ID (URL):
        </label>
        <input
          type="url"
          id="instagramId"
          name="instagramId"
          className="input-style"
          placeholder="e.g., https://instagram.com/yourprofile"
          value={formData.instagramId || ''}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="linkedinId" className="form-label">
          LinkedIn ID (URL):
        </label>
        <input
          type="url"
          id="linkedinId"
          name="linkedinId"
          className="input-style"
          placeholder="e.g., https://linkedin.com/in/yourprofile"
          value={formData.linkedinId || ''}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="currentGpa" className="form-label">
          Current GPA:
        </label>
        <input
          type="text"
          id="currentGpa"
          name="currentGpa"
          className="input-style"
          placeholder="e.g., 3.5 or 8.5/10"
          value={formData.currentGpa || ''}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-field-group">
        <label htmlFor="specialization" className="form-label">
          Specialization (if any):
        </label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          className="input-style"
          placeholder="e.g., Marketing, Software Development, UI/UX"
          value={formData.specialization || ''}
          onChange={handleInputChange}
        />
      </div>

      

    </div>
  );
};

export default StudyDetails;