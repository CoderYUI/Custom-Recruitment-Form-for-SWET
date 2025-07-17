// src/components/StudyDetails.jsx
import React from 'react';

const StudyDetails = ({ formData, handleInputChange, showValidation }) => {
  // Helper function for validation error messages
  const ValidationError = ({ message }) => (
    <span style={{
      color: '#e53935',
      fontSize: '0.9em',
      marginTop: 4,
      display: 'block',
      padding: '2px 0'
    }}>
      {message || 'Please fill this field.'}
    </span>
  );

  // Helper function to check if a field is empty
  const isFieldEmpty = (fieldName) => {
    return !formData[fieldName]?.trim();
  };

  return (
    <div className="info-box">
      <h2 className="info-box-title">Academic Information</h2>
      <p style={{
        fontSize: '0.85rem',
        color: 'var(--secondary-text-color)',
        marginBottom: '16px',
        fontStyle: 'italic'
      }}>
        Fields marked with <span className="required-asterisk">*</span> are required
      </p>
      <div className="form-fields-vertical">
        <div className="form-field-group">
          <label htmlFor="yearOfStudy" className="form-label">
            Year of Study <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="yearOfStudy"
            name="yearOfStudy"
            className={`input-style ${showValidation && isFieldEmpty('yearOfStudy') ? 'validation-error' : ''}`}
            placeholder="e.g., 2nd Year, Final Year"
            value={formData.yearOfStudy || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('yearOfStudy') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="stateCityUniversity" className="form-label">
            State/City of University/College <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="stateCityUniversity"
            name="stateCityUniversity"
            className={`input-style ${showValidation && isFieldEmpty('stateCityUniversity') ? 'validation-error' : ''}`}
            placeholder="e.g., Madhya Pradesh / Bhopal"
            value={formData.stateCityUniversity || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('stateCityUniversity') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="resumeUrl" className="form-label">
            Resume URL <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="resumeUrl"
            name="resumeUrl"
            className={`input-style ${showValidation && isFieldEmpty('resumeUrl') ? 'validation-error' : ''}`}
            placeholder="e.g., https://drive.google.com/your-resume"
            value={formData.resumeUrl || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('resumeUrl') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="instagramId" className="form-label">
            Instagram ID (URL) <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="instagramId"
            name="instagramId"
            className={`input-style ${showValidation && isFieldEmpty('instagramId') ? 'validation-error' : ''}`}
            placeholder="e.g., https://instagram.com/yourprofile"
            value={formData.instagramId || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('instagramId') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="linkedinId" className="form-label">
            LinkedIn ID (URL) <span className="required-asterisk">*</span>
          </label>
          <input
            type="url"
            id="linkedinId"
            name="linkedinId"
            className={`input-style ${showValidation && isFieldEmpty('linkedinId') ? 'validation-error' : ''}`}
            placeholder="e.g., https://linkedin.com/in/yourprofile"
            value={formData.linkedinId || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('linkedinId') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="currentGpa" className="form-label">
            Current GPA <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="currentGpa"
            name="currentGpa"
            className={`input-style ${showValidation && isFieldEmpty('currentGpa') ? 'validation-error' : ''}`}
            placeholder="e.g., 3.5 or 8.5/10"
            value={formData.currentGpa || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('currentGpa') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="specialization" className="form-label">
            Specialization (if any) <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            className={`input-style ${showValidation && isFieldEmpty('specialization') ? 'validation-error' : ''}`}
            placeholder="e.g., Marketing, Software Development, UI/UX"
            value={formData.specialization || ''}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {showValidation && isFieldEmpty('specialization') && <ValidationError />}
        </div>
      </div>
    </div>
  );
};

export default StudyDetails;