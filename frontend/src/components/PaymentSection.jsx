// src/components/PaymentSection.jsx
import React, { useState, useRef } from 'react';
import FormSectionWrapper from './FormSectionWrapper';

const PaymentSection = () => {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null); 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      
      
      console.log('Selected file:', file.name);
    } else {
      setFileName('');
    }
  };

  const handleLabelClick = () => {
    
    fileInputRef.current.click();
  };

  return (
    <FormSectionWrapper sectionNumber="13"> {}
      <div className="info-box">
        <h2 className="info-box-title">Payment Section</h2>
        <p className="payment-info-text">
          Kindly upload the screen shot of the payment:
        </p>

        <div className="file-upload-wrapper">
          <label className="file-upload-label" onClick={handleLabelClick}>
            Choose File No file chosen
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*" 
              aria-label="Upload payment screenshot"
            />
          </label>
          {fileName && <p className="file-name-display">{fileName}</p>}
        </div>

        <div className="account-details-box">
          A/C - <span className="account-number-bold">12930100021796</span>
          <br />
          IFSC CODE - <span className="account-number-bold">BARBOSOHAGP</span>
          <span className="account-details-asterisk">*</span>
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default PaymentSection;