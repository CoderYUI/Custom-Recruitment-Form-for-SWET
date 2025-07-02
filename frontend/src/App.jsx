// src/App.jsx
import React, { useState } from 'react';

// Core layout and global styles
import './index.css';

// Component Imports: These are the ONLY components you should import here
import Header from './components/Header';
import FormSectionWrapper from './components/FormSectionWrapper';
import SectionIntro from './components/SectionIntro';
import BasicDetails from './components/BasicDetailsForm';
import StudyDetails from './components/StudyDetails';
import DepartmentDetails from './components/DepartmentDetails';
import DynamicRoleRequirements from './components/DynamicRoleRequirements'; 
import PaymentSection from './components/PaymentSection';

// Data Import: This contains all the definitions for role-specific requirements
import { roleRequirementsData } from './data/roleRequirenmentData';

function App() {
  const [formData, setFormData] = useState({
    
    name: '',
    contactNumber: '',
    emailId: '',
    universityCollege: '',

    
    yearOfStudy: '',
    stateCityUniversity: '',
    resumeUrl: '',
    instagramId: '',
    linkedinId: '',
    currentGpa: '',
    specialization: '',
    cityUniversity: '', 

    
    interestedDepartments: [],

    
    
    
    
    socialMediaSkillSets: '',
    socialMediaPreviousExperience: '',
    socialMediaReferralName: '',
    videoEditorPortfolioLink: '',
    videoEditorSoftwareProficiency: '',
    videoEditorYearsExperience: '',
    
    
    
    
    
    
    
    
    
    
    
    

    
    paymentFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDepartmentChange = (selectedDepartments) => {
    setFormData((prevData) => ({
      ...prevData,
      interestedDepartments: selectedDepartments,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      paymentFile: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="app-main-wrapper">
      <form className="application-form" onSubmit={handleSubmit}>
        <Header />

        <FormSectionWrapper sectionTitle="Introduction" sectionTag="Section 1 of 13">
          <SectionIntro />
        </FormSectionWrapper>

        <FormSectionWrapper sectionTitle="Basic Details" sectionTag="Section 2 of 13">
          <BasicDetails formData={formData} handleInputChange={handleInputChange} />
        </FormSectionWrapper>

        <FormSectionWrapper sectionTitle="Study Details" sectionTag="Section 3 of 13">
          <StudyDetails formData={formData} handleInputChange={handleInputChange} />
        </FormSectionWrapper>

        <FormSectionWrapper sectionTitle="Department Selection" sectionTag="Section 4 of 13">
          <DepartmentDetails
            formData={formData}
            handleInputChange={handleInputChange}
            onDepartmentsChange={handleDepartmentChange}
          />
        </FormSectionWrapper>

        {}
        {/* This loop iterates through selected departments and renders
            a DynamicRoleRequirements component for each, using data from roleRequirementsData.js */}
        {formData.interestedDepartments.map((role) => {
          const roleData = roleRequirementsData[role]; 
          if (roleData) {
            return (
              <FormSectionWrapper
                key={role} 
                sectionTitle={`${role} Requirements`} 
                
                
              >
                <DynamicRoleRequirements
                  roleData={roleData} 
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </FormSectionWrapper>
            );
          }
          return null; 
        })}

        <FormSectionWrapper sectionTitle="Payment Section" sectionTag="Section 13 of 13">
          <PaymentSection formData={formData} handleFileChange={handleFileChange} />
        </FormSectionWrapper>

        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;