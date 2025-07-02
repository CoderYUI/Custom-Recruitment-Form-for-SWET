// src/components/SectionIntro.jsx
import React from 'react';
import FormSectionWrapper from './FormSectionWrapper';

const SectionIntro = () => {
  return (
    <FormSectionWrapper sectionNumber="1" sectionTitle="Recruitment of SWET">
      <div className="info-box">
        <h2 className="info-box-title">Join Shwetansh Welfare And Educational Trust.</h2>
        <h4 className="info-box-subtitle">Why Join us?</h4>
        <ul className="info-box-list">
          <li>Get Experience Letter</li>
          <li>Authorized Certificates</li>
          <li>Professional Exposure</li>
          <li>Build up Confidence</li>
          <li>Boost your resume</li>
        </ul>

        <h4 className="info-box-subtitle connect-heading">Connect with us:</h4>
        <p className="contact-info">
          <span className="contact-label">📞 Call us:</span> <a href="tel:+918989973328" className="contact-link">+91 8989973328</a>
        </p>
        <p className="contact-info">
          <span className="contact-label">📸 Instagram:</span> <a href="https://www.instagram.com/swetansh_welfare_educational_trust" target="_blank" rel="noopener noreferrer" className="contact-link">@swetansh_welfare_educational_trust</a>
        </p>
        <p className="contact-info">
          <span className="contact-label">🔗 LinkedIn:</span> <a href="https://www.linkedin.com/company/swetansh-welfare-and-educational-trust/" target="_blank" rel="noopener noreferrer" className="contact-link">Shwetansh Welfare And Educational Trust</a>
        </p>
      </div>

      <p className="form-note">This form is automatically collecting emails from all respondents. <a href="#" className="change-settings-link">Change settings</a></p>
    </FormSectionWrapper>
  );
};

export default SectionIntro;