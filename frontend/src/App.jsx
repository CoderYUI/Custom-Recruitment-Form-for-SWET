// src/App.jsx
import React, { useState, useEffect } from 'react';

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

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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

  const [showBasicValidation, setShowBasicValidation] = useState(false);
  const [showStudyValidation, setShowStudyValidation] = useState(false);
  const [showDepartmentValidation, setShowDepartmentValidation] = useState(false);
  const [roleValidation, setRoleValidation] = useState({}); // { roleName: boolean }

  // Validation for Basic Details section
  const isBasicDetailsValid =
    formData.name.trim() !== '' &&
    formData.emailId.trim() !== '' &&
    formData.universityCollege.trim() !== '' &&
    formData.contactNumber.trim() !== '';

  // Validation for Study Details section
  const isStudyDetailsValid =
    formData.yearOfStudy.trim() !== '' &&
    formData.stateCityUniversity.trim() !== '';

  // Validation for Department section
  const isDepartmentValid = formData.interestedDepartments.length > 0;

  // Validation for Dynamic Role Requirements
  const isRoleSectionValid = (roleData) => {
    if (!roleData) return true;
    return roleData.fields
      .filter((f) => f.required)
      .every((f) => (formData[f.name] || '').trim() !== '');
  };

  // Build the ordered list of sections
  const dynamicRoles = formData.interestedDepartments.map((role) => ({
    type: 'role',
    role,
    roleData: roleRequirementsData[role],
  }));

  const sections = [
    { type: 'intro' },
    { type: 'basic' },
    { type: 'study' },
    { type: 'department' },
    ...dynamicRoles,
    { type: 'payment' },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('swetFormData');
    if (saved) {
      try {
        setFormData((prev) => ({
          ...prev,
          ...JSON.parse(saved),
        }));
      } catch (e) {
        // ignore parse error
      }
    }
  }, []);

  // Save to localStorage on formData change (except paymentFile)
  useEffect(() => {
    const { paymentFile, ...toSave } = formData;
    localStorage.setItem('swetFormData', JSON.stringify(toSave));
  }, [formData]);

  // Handler functions
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

  // Navigation handlers
  const goNext = () => {
    if (currentSection === 1) {
      if (!isBasicDetailsValid) {
        setShowBasicValidation(true);
        return;
      }
      setShowBasicValidation(false);
    }
    if (currentSection === 2) {
      if (!isStudyDetailsValid) {
        setShowStudyValidation(true);
        return;
      }
      setShowStudyValidation(false);
    }
    if (currentSection === 3) {
      if (!isDepartmentValid) {
        setShowDepartmentValidation(true);
        return;
      }
      setShowDepartmentValidation(false);
    }
    // Dynamic role requirements validation
    const section = sections[currentSection];
    if (section.type === 'role') {
      if (!isRoleSectionValid(section.roleData)) {
        setRoleValidation((prev) => ({
          ...prev,
          [section.role]: true,
        }));
        return;
      }
      setRoleValidation((prev) => ({
        ...prev,
        [section.role]: false,
      }));
    }
    if (currentSection < sections.length - 1) setCurrentSection((i) => i + 1);
  };
  const goBack = () => {
    if (currentSection > 0) setCurrentSection((i) => i - 1);
  };

  // Render the current section only
  const renderSection = () => {
    const section = sections[currentSection];
    switch (section.type) {
      case 'intro':
        return (
          <FormSectionWrapper sectionNumber={1}>
            <SectionIntro />
          </FormSectionWrapper>
        );
      case 'basic':
        return (
          <FormSectionWrapper sectionTitle="Basic Details" sectionNumber={2}>
            <BasicDetails
              formData={formData}
              handleInputChange={handleInputChange}
              showValidation={showBasicValidation}
            />
          </FormSectionWrapper>
        );
      case 'study':
        return (
          <FormSectionWrapper sectionTitle="Study Details" sectionNumber={3}>
            <StudyDetails
              formData={formData}
              handleInputChange={handleInputChange}
              showValidation={showStudyValidation}
            />
          </FormSectionWrapper>
        );
      case 'department':
        return (
          <FormSectionWrapper sectionTitle="Department Selection" sectionNumber={4}>
            <DepartmentDetails
              formData={formData}
              handleInputChange={handleInputChange}
              onDepartmentsChange={handleDepartmentChange}
              showValidation={showDepartmentValidation}
            />
          </FormSectionWrapper>
        );
      case 'role':
        return (
          <FormSectionWrapper
            key={section.role}
            sectionTitle={`${section.role} Requirements`}
            sectionNumber={4 + dynamicRoles.findIndex((r) => r.role === section.role) + 1}
          >
            <DynamicRoleRequirements
              roleData={section.roleData}
              formData={formData}
              handleInputChange={handleInputChange}
              showValidation={roleValidation[section.role]}
            />
          </FormSectionWrapper>
        );
      case 'payment':
        return (
          <FormSectionWrapper sectionTitle="Payment Section" sectionNumber={sections.length}>
            <PaymentSection formData={formData} handleFileChange={handleFileChange} />
          </FormSectionWrapper>
        );
      default:
        return null;
    }
  };

  // Submit handler: send to backend on payment section
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only submit if on payment section
    if (sections[currentSection]?.type === 'payment') {
      try {
        // Prepare data (exclude paymentFile for now)
        const { paymentFile, ...submitData } = formData;
        // Use backend URL from env
        const response = await fetch(`${BACKEND_URL}/api/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData),
        });
        if (response.ok) {
          localStorage.removeItem('swetFormData');
          alert('Form submitted! Check console for data.');
        } else {
          alert('Submission failed. Please try again.');
        }
      } catch (err) {
        alert('Submission error. Please try again.');
      }
    }
    // Debugging log
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="app-main-wrapper">
      <form className="application-form" onSubmit={handleSubmit} noValidate>
        <Header />
        {renderSection()}
        <div
          className="submit-button-container"
          style={{
            display: 'flex',
            flexDirection: currentSection === 0 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: currentSection === 0 ? 'center' : 'space-between',
            gap: currentSection === 0 ? 16 : 32,
            marginTop: 24,
          }}
        >
          {currentSection > 0 && (
            <button type="button" className="submit-button" onClick={goBack} style={{ minWidth: 120 }}>
              Back
            </button>
          )}
          {currentSection < sections.length - 1 ? (
            <>
              <button
                type="button"
                className="submit-button"
                onClick={goNext}
                style={{
                  minWidth: 120,
                  marginLeft: currentSection > 0 ? 'auto' : undefined,
                  alignSelf: currentSection === 0 ? 'center' : undefined,
                }}
              >
                Next
              </button>
              {currentSection === 0 && (
                <button
                  type="button"
                  className="submit-button"
                  style={{
                    background: '#fff',
                    color: '#2563eb',
                    border: '2px solid #2563eb',
                    marginTop: 16,
                    fontWeight: 700,
                    minWidth: 220,
                    alignSelf: 'center',
                  }}
                  tabIndex={-1}
                  disabled
                >
                  Already Filled But Payment Failed?
                </button>
              )}
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default App;