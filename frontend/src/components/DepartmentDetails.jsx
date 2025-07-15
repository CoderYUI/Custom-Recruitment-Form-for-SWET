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

  return (
    <div className="info-box">
      <h2 className="info-box-title">Department Selection</h2>
      <div className="form-fields-vertical">
        <div className="form-field-group">
          <label className="form-label">
            Interested Department <span className="required-asterisk">*</span>
          </label>
          <div
            className="checkbox-group"
            style={{
              marginTop: 8,
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-start',
              display: 'flex',
            }}
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
                <span style={{ marginRight: 8 }}>{departmentIcons[dept]}</span>
                {dept}
              </label>
            ))}
          </div>
          {showValidation && formData.interestedDepartments.length === 0 && (
            <span style={{ color: '#e53935', fontSize: '0.97em', marginTop: 6, display: 'block' }}>
              Please select at least one department.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;