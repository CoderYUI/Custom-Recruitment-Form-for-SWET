import React from "react";

const ResearchDevelopmentForm = () => {
  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px", borderRadius: "10px", maxWidth: "700px", margin: "auto" }}>
      <h4 style={{ color: "#d44", marginBottom: "10px" }}>Section 7 of 13</h4>

      <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
        <h2>R&D:</h2>
        <h4 style={{ color: "#e91e63", marginTop: "10px" }}>🎯 Role Responsibilities:</h4>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Identify market needs and technological opportunities.</li>
          <li>Generate new ideas and develop innovative concepts.</li>
          <li>Conduct research and experiments to explore solutions.</li>
          <li>Develop and test new products, services, or processes.</li>
          <li>Drive innovation and continuously improve existing offerings.</li>
          <li>Collaborate with other teams for successful implementation.</li>
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

export default ResearchDevelopmentForm;

