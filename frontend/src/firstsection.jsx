import React, { useState } from "react";

const firstsection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    college: "",
    year: "",
    branch: "",
    instagram: "",
    linkedin: "",
    gpa: "",
    specialization: "",
    city: "",
    state: "",
    departments: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      departments: checked
        ? [...prev.departments, value]
        : prev.departments.filter((dep) => dep !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const containerStyle = {
    backgroundColor: "#ffe6e6",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={containerStyle}>
        <label style={labelStyle}>NAME: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="name" value={formData.name} onChange={handleChange} required />

        <label style={labelStyle}>CONTACT NUMBER: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="contact" value={formData.contact} onChange={handleChange} required />

        <label style={labelStyle}>EMAIL ID: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="email" value={formData.email} onChange={handleChange} required />

        <label style={labelStyle}>UNIVERSITY/COLLEGE NAME: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="college" value={formData.college} onChange={handleChange} required />

        <label style={labelStyle}>YEAR OF STUDY: <span style={{ color: "red" }}>*</span></label>
        {["1", "2", "3", "4", "5", "Other"].map((year) => (
          <div key={year}>
            <label>
              <input
                type="radio"
                name="year"
                value={year}
                checked={formData.year === year}
                onChange={handleChange}
                required
              />{" "}
              {year} year
            </label>
          </div>
        ))}

        <br />
        <label style={labelStyle}>BRANCH: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="branch" value={formData.branch} onChange={handleChange} required />

        <label style={labelStyle}>INSTAGRAM ID (URL): <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="instagram" value={formData.instagram} onChange={handleChange} required />

        <label style={labelStyle}>LINKEDIN ID (URL):</label>
        <input style={inputStyle} name="linkedin" value={formData.linkedin} onChange={handleChange} />

        <label style={labelStyle}>CURRENT GPA:</label>
        <input style={inputStyle} name="gpa" value={formData.gpa} onChange={handleChange} />

        <label style={labelStyle}>SPECIALIZATION (if any):</label>
        <input style={inputStyle} name="specialization" value={formData.specialization} onChange={handleChange} />

        <label style={labelStyle}>CITY OF UNIVERSITY/COLLEGE: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="city" value={formData.city} onChange={handleChange} required />

        <label style={labelStyle}>STATE OF UNIVERSITY/COLLEGE: <span style={{ color: "red" }}>*</span></label>
        <input style={inputStyle} name="state" value={formData.state} onChange={handleChange} required />

        <label style={labelStyle}>INTERESTED DEPARTMENT: <span style={{ color: "red" }}>*</span></label>
        {[
          "TECHNICAL", "PR", "DESIGN", "MANAGEMENT", "SOCIAL MEDIA", "CONTENT",
          "R&D", "MARKETING", "VIDEO EDITOR", "GRAPHIC DESIGNER", "FRONT OFFICE"
        ].map((dept) => (
          <div key={dept}>
            <label>
              <input
                type="checkbox"
                value={dept}
                checked={formData.departments.includes(dept)}
                onChange={handleCheckboxChange}
              />{" "}
              {dept}
            </label>
          </div>
        ))}

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            type="submit"
            style={{
              padding: "12px 30px",
              backgroundColor: "#d44",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default firstsection;
