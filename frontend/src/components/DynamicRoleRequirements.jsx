// src/components/DynamicRoleRequirements.jsx
import React from 'react';

const DynamicRoleRequirements = ({ roleData, formData, handleInputChange, showValidation }) => {
  if (!roleData) {
    return null;
  }

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
      <h3 className="info-box-title connect-heading">{roleData.title}</h3>
      <p style={{
        fontSize: '0.85rem',
        color: 'var(--secondary-text-color)',
        marginBottom: '16px',
        fontStyle: 'italic'
      }}>
        Fields marked with <span className="required-asterisk">*</span> are required
      </p>
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
          fontSize: 'calc(0.9rem + 0.1vw)', // Responsive font size
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
                className={`textarea-style ${showValidation && field.required && isFieldEmpty(field.name) ? 'validation-error' : ''}`}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                required={field.required}
                rows={field.rows || 4} // Default rows or use provided value
                aria-required={field.required ? "true" : "false"}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                className={`input-style ${showValidation && field.required && isFieldEmpty(field.name) ? 'validation-error' : ''}`}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                required={field.required}
                autoComplete={field.autoComplete || 'off'}
                inputMode={field.type === 'number' ? 'numeric' : 'text'}
                aria-required={field.required ? "true" : "false"}
              />
            )}
            {showValidation && field.required && isFieldEmpty(field.name) && <ValidationError />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicRoleRequirements;