import React, { useState } from 'react';

const GraphicDesignerForm = () => {
  const [formData, setFormData] = useState({
    skills: '',
    experience: '',
    referral: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{ 
        backgroundColor: "#ffe6e6", 
        padding: "20px", 
        borderRadius: "10px", 
        maxWidth: "700px", 
        margin: "auto", 
        fontFamily: "Arial, sans-serif" 
      }}
    >
      <h4 style={{ color: "#d44", marginBottom: "10px" }}>Section 3 of 13</h4>

      <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
        <h2>🎨 GRAPHIC DESIGNER</h2>
        <h4 style={{ color: "#e91e63", marginTop: "10px" }}>🎯 Role Responsibilities:</h4>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Create visual concepts to communicate ideas effectively.</li>
          <li>Design logos, banners, social media creatives, and more.</li>
          <li>Use tools like Adobe Photoshop, Figma, Canva, etc.</li>
          <li>Ensure brand consistency across all designs.</li>
          <li>Collaborate with marketing and content teams.</li>
          <li>Contribute fresh ideas to elevate design strategy.</li>
        </ul>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <span role="img" aria-label="skills">🧠</span> <strong>Skill Sets You Bring In:</strong> <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          rows="4"
          style={textareaStyle}
          placeholder="Long answer text"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <span role="img" aria-label="experience">📁</span> <strong>Previous Experience:</strong> <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows="4"
          style={textareaStyle}
          placeholder="Long answer text"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <span role="img" aria-label="referral">🧾</span> <strong>Referral Name:</strong>
        </label>
        <input
          type="text"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Short answer text"
        />
      </div>
    </form>
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

export default GraphicDesignerForm;

