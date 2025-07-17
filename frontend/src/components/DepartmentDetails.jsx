// src/components/DepartmentDetails.jsx
import React from 'react';

const departmentIcons = {
  'VIDEO EDITOR': '🎬',
  'GRAPHIC DESIGNER': '🎨',
  'FRONT OFFICE': '🛎️',
  'RESEARCH': '🔬',
  'TECHNICAL': '💻',
  'HR': '🧑‍💼',
  'CONTENT': '✍️',
  'SOCIAL MEDIA': '📱',
  'MANAGEMENT': '📊',
  'DESIGN': '🖌️',
  'PR': '📢',
  'MARKETING': '📈',
};

const DepartmentDetails = ({ formData, handleInputChange, onDepartmentsChange, showValidation }) => {
  // Helper function for validation error messages
  const ValidationError = ({ message }) => (
    <span style={{
      color: '#e53935',
      fontSize: '0.9em',
      marginTop: 4,
      display: 'block',
      padding: '2px 0'
    }}>
      {message || 'Please select at least one department.'}
    </span>
  );

  const departments = [
    'VIDEO EDITOR',
    'GRAPHIC DESIGNER',
    'FRONT OFFICE',
    'RESEARCH',
    'TECHNICAL',
    'HR',
    'CONTENT',
    'SOCIAL MEDIA',
    'MANAGEMENT',
    'DESIGN',
    'PR',
    'MARKETING',
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedDepartments;

    if (checked) {
      updatedDepartments = [...formData.interestedDepartments, value];
    } else {
      updatedDepartments = formData.interestedDepartments.filter((dept) => dept !== value);
    }
    onDepartmentsChange(updatedDepartments);
  };

  const isDepartmentEmpty = formData.interestedDepartments.length === 0;

  return (
    <div className="info-box">
      <h2 className="info-box-title">Department Selection</h2>
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
          <label className="form-label">
            Interested Department <span className="required-asterisk">*</span>
          </label>
          <div
            className={`checkbox-group ${showValidation && isDepartmentEmpty ? 'validation-error' : ''}`}
            style={{
              marginTop: 8,
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-start',
              display: 'flex',
            }}
            aria-required="true"
          >
            {departments.map((dept) => (
              <label key={dept} className="checkbox-item">
                <input
                  type="checkbox"
                  name="interestedDepartments"
                  value={dept}
                  checked={formData.interestedDepartments.includes(dept)}
                  onChange={handleCheckboxChange}
                  required
                />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    marginRight: 8,
                    fontSize: '1.2em',
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}>{departmentIcons[dept]}</span>
                  <span>{dept}</span>
                </div>
              </label>
            ))}
          </div>
          {showValidation && isDepartmentEmpty && <ValidationError />}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;