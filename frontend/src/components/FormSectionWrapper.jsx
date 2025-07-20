// src/components/FormSectionWrapper.jsx
import React from 'react';

const FormSectionWrapper = ({ children, sectionNumber, sectionTitle }) => {
  return (
    <div className="form-container">
      {/* Removed progress bar and section info */}
      {sectionTitle && (
        <h2 className="form-section-title" style={{
          fontSize: 'calc(1.2rem + 0.5vw)',
          marginBottom: '16px',
          textAlign: 'left',
          color: 'var(--heading-color)',
          lineHeight: '1.3'
        }}>
          {sectionTitle}
        </h2>
      )}
      {children}
    </div>
  );
};

export default FormSectionWrapper;