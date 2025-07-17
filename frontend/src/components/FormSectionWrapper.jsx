// src/components/FormSectionWrapper.jsx
import React from 'react';

const FormSectionWrapper = ({ children, sectionNumber, sectionTitle }) => {
  // Calculate progress percentage based on section number
  const totalSections = 5; // Assuming 5 total sections
  const progressPercentage = (sectionNumber / totalSections) * 100;

  return (
    <div className="form-container">
      {/* Section progress bar - simplified to a single layout */}
      <div className="progress-container" style={{
        width: '100%',
        marginBottom: '15px'
      }}>
        {/* Progress bar */}
        <div style={{
          height: '4px',
          backgroundColor: '#e0e7ff',
          borderRadius: '2px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progressPercentage}%`,
            backgroundColor: 'var(--button-primary-bg)',
            borderRadius: '2px',
            transition: 'width 0.5s ease-in-out'
          }}></div>
        </div>
        
        {/* Progress text - single line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          marginTop: '5px'
        }}>
          <span>Section {sectionNumber} of {totalSections}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
      </div>

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