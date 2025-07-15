// src/components/StudyDetails.jsx
import React from 'react';

const StudyDetails = ({ formData, handleInputChange, showValidation }) => {
  return (
    <div className="info-box">
      <h2 className="info-box-title">Academic Information</h2>
      <div className="form-fields-vertical">
        <div className="form-field-group">
          <label htmlFor="yearOfStudy" className="form-label">
            Year of Study <span className="required-asterisk">*</span>
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
          {showValidation && !formData.yearOfStudy.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="stateCityUniversity" className="form-label">
            State/City of University/College <span className="required-asterisk">*</span>
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
          {showValidation && !formData.stateCityUniversity.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="resumeUrl" className="form-label">
            Resume URL <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            className="input-style"
            placeholder="e.g., https://linkedin.com/in/yourprofile"
            value={formData.resumeUrl || ''}
            onChange={handleInputChange}
            required
          />
          {showValidation && !formData.resumeUrl.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="instagramId" className="form-label">
            Instagram ID (URL) <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="instagramId"
            name="instagramId"
            className="input-style"
            placeholder="e.g., https://instagram.com/yourprofile"
            value={formData.instagramId || ''}
            onChange={handleInputChange}
            required
          />
          {showValidation && !formData.instagramId.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="linkedinId" className="form-label">
            LinkedIn ID (URL) <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="linkedinId"
            name="linkedinId"
            className="input-style"
            placeholder="e.g., https://linkedin.com/in/yourprofile"
            value={formData.linkedinId || ''}
            onChange={handleInputChange}
            required
          />
          {showValidation && !formData.linkedinId.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="currentGpa" className="form-label">
            Current GPA <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="currentGpa"
            name="currentGpa"
            className="input-style"
            placeholder="e.g., 3.5 or 8.5/10"
            value={formData.currentGpa || ''}
            onChange={handleInputChange}
            required
          />
          {showValidation && !formData.currentGpa.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
        <div className="form-field-group">
          <label htmlFor="specialization" className="form-label">
            Specialization (if any) <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            className="input-style"
            placeholder="e.g., Marketing, Software Development, UI/UX"
            value={formData.specialization || ''}
            onChange={handleInputChange}
            required
          />
          {showValidation && !formData.specialization.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyDetails;