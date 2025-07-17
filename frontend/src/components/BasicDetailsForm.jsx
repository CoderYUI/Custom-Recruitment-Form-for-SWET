// src/components/BasicDetailsForm.jsx
import React from 'react';

const BasicDetailsForm = ({ formData, handleInputChange, showValidation }) => {
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
      <h2 className="info-box-title">Basic Details</h2>
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
          <label htmlFor="name" className="form-label">
            Name <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`input-style ${showValidation && isFieldEmpty('name') ? 'validation-error' : ''}`}
            required
            placeholder="Your full name"
            autoComplete="name"
            aria-required="true"
          />
          {showValidation && isFieldEmpty('name') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="emailId" className="form-label">
            Email ID <span className="required-asterisk">*</span>
          </label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleInputChange}
            className={`input-style ${showValidation && isFieldEmpty('emailId') ? 'validation-error' : ''}`}
            required
            placeholder="your.email@example.com"
            autoComplete="email"
            aria-required="true"
          />
          {showValidation && isFieldEmpty('emailId') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="universityCollege" className="form-label">
            University/College Name <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="universityCollege"
            name="universityCollege"
            value={formData.universityCollege}
            onChange={handleInputChange}
            className={`input-style ${showValidation && isFieldEmpty('universityCollege') ? 'validation-error' : ''}`}
            required
            placeholder="Your University or College name"
            autoComplete="organization"
            aria-required="true"
          />
          {showValidation && isFieldEmpty('universityCollege') && <ValidationError />}
        </div>
        <div className="form-field-group">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number <span className="required-asterisk">*</span>
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={`input-style ${showValidation && isFieldEmpty('contactNumber') ? 'validation-error' : ''}`}
            required
            placeholder="Your phone number"
            autoComplete="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            aria-required="true"
          />
          {showValidation && isFieldEmpty('contactNumber') && <ValidationError />}
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;