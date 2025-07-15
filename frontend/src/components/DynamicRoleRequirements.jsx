// src/components/DynamicRoleRequirements.jsx
import React from 'react';

const DynamicRoleRequirements = ({ roleData, formData, handleInputChange, showValidation }) => {
  if (!roleData) {
    return null;
  }

  return (
    <div className="info-box">
      <h3 className="info-box-title connect-heading">{roleData.title}</h3>
      <div
        className="payment-info-text"
        style={{
          whiteSpace: 'pre-line',
          background: '#eaf2ff',
          borderRadius: 8,
          padding: '14px 16px',
          marginBottom: 22,
          color: '#222',
          fontWeight: 500,
        }}
      >
        {roleData.description}
      </div>
      <div className="form-fields-vertical">
        {roleData.fields.map((field) => (
          <div className="form-field-group" key={field.name}>
            <label htmlFor={field.name} className="form-label">
              {field.label}
              {field.required && <span className="required-asterisk">*</span>}
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
            {showValidation && field.required && !formData[field.name]?.trim() && (
              <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 4, display: 'block' }}>
                Please fill this field.
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicRoleRequirements;