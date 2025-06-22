// src/components/DynamicRoleRequirements.jsx
import React from 'react';

const DynamicRoleRequirements = ({ roleData, formData, handleInputChange }) => {
  if (!roleData) {
    return null;
  }

  return (
    <div className="info-box">
      <h3 className="info-box-title connect-heading">{roleData.title}</h3>
      <p className="payment-info-text" style={{ whiteSpace: 'pre-line' }}>{roleData.description}</p>
      {}

      {roleData.fields.map((field) => (
        <div className="form-field-group" key={field.name}>
          <label htmlFor={field.name} className="form-label">
            {field.label} {field.required && <span className="required-asterisk">*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              className="textarea-style"
              placeholder={field.placeholder}
              value={formData[field.name] || ''} 
              onChange={handleInputChange}
              required={field.required}
            ></textarea>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              className="input-style"
              placeholder={field.placeholder}
              value={formData[field.name] || ''} 
              onChange={handleInputChange}
              required={field.required}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicRoleRequirements;