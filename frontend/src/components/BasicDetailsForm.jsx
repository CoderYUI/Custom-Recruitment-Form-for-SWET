// src/components/BasicDetailsForm.jsx
import React, { useState } from 'react';
import FormSectionWrapper from './FormSectionWrapper';

const BasicDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    universityCollege: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <FormSectionWrapper sectionNumber="2"> {}
      <div className="info-box">
        <h2 className="info-box-title">BASIC DETAILS</h2>
        <div className="form-field-group">
          <label htmlFor="name" className="form-label">
            NAME: <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-style"
            required
            placeholder="Your full name"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="emailId" className="form-label">
            EMAIL ID: <span className="required-asterisk">*</span>
          </label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            className="input-style"
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="universityCollege" className="form-label">
            UNIVERSITY/COLLEGE NAME: <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="universityCollege"
            name="universityCollege"
            value={formData.universityCollege}
            onChange={handleChange}
            className="input-style"
            required
            placeholder="Your University or College name"
          />
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default BasicDetailsForm;