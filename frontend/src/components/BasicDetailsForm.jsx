// src/components/BasicDetailsForm.jsx
import React from 'react';

const BasicDetailsForm = ({ formData, handleInputChange, showValidation }) => {
  return (
    <div className="info-box">
      <h2 className="info-box-title">Basic Details</h2>
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
            className="input-style"
            required
            placeholder="Your full name"
          />
          {showValidation && !formData.name.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
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
            className="input-style"
            required
            placeholder="your.email@example.com"
          />
          {showValidation && !formData.emailId.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
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
            className="input-style"
            required
            placeholder="Your University or College name"
          />
          {showValidation && !formData.universityCollege.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
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
            className="input-style"
            required
            placeholder="Your phone number"
          />
          {showValidation && !formData.contactNumber.trim() && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
              Please fill this field.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;