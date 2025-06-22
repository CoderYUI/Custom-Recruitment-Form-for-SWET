// src/components/DepartmentDetails.jsx
import React from 'react';

const DepartmentDetails = ({ formData, handleInputChange, onDepartmentsChange }) => {
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
      <h3 className="info-box-title">Interested Department: <span className="required-asterisk">*</span></h3>
      <div className="checkbox-group">
        {departments.map((dept) => (
          <label key={dept} className="checkbox-item">
            <input
              type="checkbox"
              name="interestedDepartments"
              value={dept}
              checked={formData.interestedDepartments.includes(dept)}
              onChange={handleCheckboxChange}
            />
            {dept}
          </label>
        ))}
      </div>
      {}
      {formData.interestedDepartments.length === 0 && (
        <p className="validation-hint">Please select at least one department.</p>
      )}

      {/* IMPORTANT: The "Other Details" fields (Resume URL, Instagram ID, etc.)
          were moved from here to StudyDetails.jsx for better organization.
          Do NOT put them back here to avoid duplicates. */}
    </div>
  );
};

export default DepartmentDetails;