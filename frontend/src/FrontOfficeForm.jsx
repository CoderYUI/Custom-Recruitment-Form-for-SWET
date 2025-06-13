import React from "react";

const FrontOfficeForm = () => {
  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px", borderRadius: "10px", maxWidth: "700px", margin: "auto" }}>
      <h4 style={{ color: "#d44", marginBottom: "10px" }}>Section 4 of 13</h4>

      <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
        <h2>💼 Front Office</h2>
        <h4 style={{ color: "#e91e63", marginTop: "10px" }}>🎯 Role Responsibilities:</h4>
        <ul style={{ lineHeight: "1.8" }}>
           <li>Greet visitors and manage the front desk operations.</li>
          <li>Handle phone calls, inquiries, and appointments.</li>
          <li>Maintain a professional and organized reception area.</li>
          <li>Support administrative and clerical duties.</li>
          <li>Coordinate with internal teams for smooth operations.</li>
          <li>Maintain logs, records, and daily attendance tracking.</li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label><span role="img" aria-label="skills">🧠</span> <strong>Skill Sets You Bring In:</strong> <span style={{ color: "red" }}>*</span></label>
        <textarea rows="4" style={textareaStyle} placeholder="Long answer text"></textarea>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label><span role="img" aria-label="experience">📁</span> <strong>Previous Experience:</strong> <span style={{ color: "red" }}>*</span></label>
        <textarea rows="4" style={textareaStyle} placeholder="Long answer text"></textarea>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label><span role="img" aria-label="referral">🧾</span> <strong>Referral Name:</strong></label>
        <input type="text" style={inputStyle} placeholder="Short answer text" />
      </div>
    </div>
  );
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "8px",
  fontSize: "14px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "8px",
  fontSize: "14px"
};

export default FrontOfficeForm;


