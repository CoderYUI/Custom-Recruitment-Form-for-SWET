// src/components/FormSectionWrapper.jsx
import React from 'react';

const FormSectionWrapper = ({ children, sectionNumber, sectionTitle }) => {
  return (
    <div className="form-container">
      {}
      <div className="section-tag">
        Section {sectionNumber} of 13
      </div>
      {}
      {sectionTitle && <h2 className="form-section-title">{sectionTitle}</h2>}
      {children}
    </div>
  );
};

export default FormSectionWrapper;