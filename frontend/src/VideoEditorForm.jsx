import React from "react";

const VideoEditorForm = () => {
  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px", borderRadius: "10px", maxWidth: "700px", margin: "auto" }}>
      <h4 style={{ color: "#d44", marginBottom: "10px" }}>Section 2 of 13</h4>

      <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", marginBottom: "20px" }}>
        <h2>🎬 VIDEO EDITOR</h2>
        <h4 style={{ color: "#e91e63", marginTop: "10px" }}>🎯 Role Responsibilities:</h4>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Understand the project goals and edit footage to match the vision.</li>
          <li>Use editing software to produce polished, engaging videos.</li>
          <li>Add effects, music, and graphics to enhance visual storytelling.</li>
          <li>Collaborate with creative and marketing teams.</li>
          <li>Ensure timely delivery and maintain quality standards.</li>
          <li>Stay updated with the trends in video content and editing tools.</li>
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

export default VideoEditorForm;

