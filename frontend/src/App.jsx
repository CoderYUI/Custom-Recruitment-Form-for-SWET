import React, { useState } from "react";
import VideoEditorForm from "./VideoEditorForm";
import GraphicDesignerForm from "./GraphicDesignerForm";
import FrontOfficeForm from "./FrontOfficeForm";
import MarketingForm from "./MarketingForm";
import TechnicalForm from "./TechnicalForm";
import ResearchDevelopmentForm from "./ResearchDevelopmentForm";
import ContentForm from "./ContentForm";
import SocialMediaForm from "./SocialMediaForm";
import ManagementForm from "./ManagementForm";
import DesignForm from "./DesignForm";
import PRForm from "./PRForm";
import Logo from "./assets/logo.jpg";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";

const departmentForms = {
  "VIDEO EDITOR": VideoEditorForm,
  "GRAPHIC DESIGNER": GraphicDesignerForm,
  "FRONT OFFICE": FrontOfficeForm,
  "MARKETING": MarketingForm,
  "TECHNICAL": TechnicalForm,
  "R&D": ResearchDevelopmentForm,
  "CONTENT": ContentForm,
  "SOCIAL MEDIA": SocialMediaForm,
  "MANAGEMENT": ManagementForm,
  "DESIGN": DesignForm,
  "PR": PRForm,
};

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    college: "",
    year: "",
    state: "",
    departments: [],
    branch: "",
    instagram: "",
    linkedin: "",
    gpa: "",
    specialization: "",
    city: "",
    paymentScreenshot: null,
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

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      paymentScreenshot: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.departments.length === 0) {
      alert("Please select at least one department!");
      return;
    }
    console.log("Submitted data:", formData);
    alert("Form submitted successfully!");
  };

  const sectionStyle = {
    backgroundColor: "#ffe6e6",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white min-h-screen px-2 sm:px-4">
        <div className="bg-slate-700 p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
          <div className="mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-40 object-cover shadow-lg rounded-full"
            />
            <div className="text-xs text-center mt-1 font-semibold hidden sm:block text-white">EDUCATIONAL TRUST</div>
          </div>
          <div className="bg-red-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex-1 text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold leading-tight">Shwetansh Welfare And Educational Trust</h1>
            <p className="text-sm italic">'Empowering Youth, Transforming Futures'</p>
          </div>
        </div>
        <div className="bg-red-300 px-3 py-1 text-sm">
          Section 1 of 13
        </div>
        <div className="border border-gray-300 mx-2 sm:m-4 rounded-lg">
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-normal text-gray-800">Recruitment of SWET</h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <button className="hover:bg-gray-100 p-1 rounded">×</button>
              <button className="hover:bg-gray-100 p-1 rounded">⋮</button>
            </div>
          </div>
          <div className="p-3 sm:p-4 space-y-4">
            <div>
              <p className="font-semibold mb-3">Join Shwetansh Welfare And Educational Trust.</p>
            </div>
            <div className='text-left'>
              <p className="font-semibold underline mb-3">Why join us?</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Experience letter</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Authorized Certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Real projects & Events</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>National level exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Boost your resume</span>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <p className="font-semibold underline mb-3">Connect with us:</p>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <span className="font-semibold">Whatsapp</span>
                    <Phone size={16} className="mx-2 text-green-600" />
                  </div>
                  <a
                    href="tel:+918989973328"
                    className="text-blue-600 hover:underline break-all"
                  >
                    - +91 8989973328
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <span className="font-semibold">Instagram</span>
                    <Instagram size={16} className="mx-2 text-pink-600" />
                  </div>
                  <a
                    href="https://instagram.com/shwetansh_welfare_educational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    - @shwetansh_welfare_educational
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <span className="font-semibold">Email</span>
                    <span className="mx-2">-</span>
                  </div>
                  <a
                    href="mailto:shwetanshwelfareeducational@gmail.com"
                    className="text-blue-600 hover:underline break-all"
                  >
                    shwetanshwelfareeducational@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 sm:px-4 pb-4 pt-8">
            <p className="text-xs text-gray-500">
              This form is automatically collecting emails from all respondents.
              <span className="text-blue-600 cursor-pointer hover:underline ml-1">Change settings</span>
            </p>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9", paddingBottom: "40px" }}>
        <form onSubmit={handleSubmit}>
          <div style={sectionStyle}>
            <h4 style={{ color: "#d44" }}>BASIC DETAILS</h4>
            <label style={labelStyle}>NAME: *</label>
            <input style={inputStyle} name="name" value={formData.name} onChange={handleChange} required />
            <label style={labelStyle}>CONTACT NUMBER: *</label>
            <input style={inputStyle} name="contact" value={formData.contact} onChange={handleChange} required />
            <label style={labelStyle}>EMAIL ID: *</label>
            <input style={inputStyle} name="email" type="email" value={formData.email} onChange={handleChange} required />
            <label style={labelStyle}>UNIVERSITY/COLLEGE NAME: *</label>
            <input style={inputStyle} name="college" value={formData.college} onChange={handleChange} required />
          </div>
          <div style={sectionStyle}>
            <h4 style={{ color: "#d44" }}>YEAR OF STUDY</h4>
            {["1", "2", "3", "4", "5", "Other"].map((year) => (
              <div key={year} style={{ marginBottom: "10px" }}>
                <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="year"
                    value={year}
                    checked={formData.year === year}
                    onChange={handleChange}
                    required
                    style={{ marginRight: "8px" }}
                  />
                  {year} year
                </label>
              </div>
            ))}
          </div>
          <div style={sectionStyle}>
            <h4 style={{ color: "#d44" }}>LOCATION & DEPARTMENT</h4>
            <label style={labelStyle}>STATE OF UNIVERSITY/COLLEGE: *</label>
            <input style={inputStyle} name="state" value={formData.state} onChange={handleChange} required />
            <label style={labelStyle}>INTERESTED DEPARTMENT: *</label>
            <div style={{ marginBottom: "15px" }}>
              {Object.keys(departmentForms).map((dept) => (
                <div key={dept} style={{ marginBottom: "8px" }}>
                  <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      value={dept}
                      checked={formData.departments.includes(dept)}
                      onChange={handleCheckboxChange}
                      style={{ marginRight: "8px" }}
                    />
                    {dept}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div style={sectionStyle}>
            <h4 style={{ color: "#d44" }}>OTHER DETAILS</h4>
            <label style={labelStyle}>BRANCH: *</label>
            <input style={inputStyle} name="branch" value={formData.branch} onChange={handleChange} required />
            <label style={labelStyle}>INSTAGRAM ID (URL): *</label>
            <input style={inputStyle} name="instagram" type="url" value={formData.instagram} onChange={handleChange} required />
            <label style={labelStyle}>LINKEDIN ID (URL):</label>
            <input style={inputStyle} name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} />
            <label style={labelStyle}>CURRENT GPA:</label>
            <input style={inputStyle} name="gpa" type="number" step="0.01" min="0" max="10" value={formData.gpa} onChange={handleChange} />
            <label style={labelStyle}>SPECIALIZATION (if any):</label>
            <input style={inputStyle} name="specialization" value={formData.specialization} onChange={handleChange} />
            <label style={labelStyle}>CITY OF UNIVERSITY/COLLEGE: *</label>
            <input style={inputStyle} name="city" value={formData.city} onChange={handleChange} required />
          </div>
          {formData.departments.map((dept) => {
            const DeptFormComponent = departmentForms[dept];
            if (!DeptFormComponent) {
              return (
                <div key={dept} style={{ ...sectionStyle, backgroundColor: "#ffeeee", border: "2px solid #ff6b6b" }}>
                  <h4 style={{ color: "#d63031" }}>ERROR: {dept} Form Component Not Found</h4>
                  <p>Check file location and export format</p>
                </div>
              );
            }
            return (
              <div key={dept} style={sectionStyle}>
                <DeptFormComponent />
              </div>
            );
          })}
          <div style={sectionStyle}>
            <div style={{
              backgroundColor: "#f28b82",
              padding: "6px 12px",
              borderRadius: "6px",
              color: "white",
              fontWeight: "500",
              width: "fit-content",
              marginBottom: "12px"
            }}>
              Section 13 of 13
            </div>
            <div style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "16px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              marginBottom: "16px",
            }}>
              <h3 style={{ marginBottom: "6px", fontSize: "18px", fontWeight: "600" }}>Payment Section</h3>
              <p style={{ marginBottom: "10px", fontSize: "14px", color: "#444" }}>
                Kindly upload the screenshot of the payment:
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={inputStyle}
              />
              {formData.paymentScreenshot && (
                <p style={{ color: "#28a745", fontSize: "14px" }}>
                  File selected: {formData.paymentScreenshot.name}
                </p>
              )}
            </div>
            <div style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "16px",
              fontSize: "16px",
              fontWeight: "500",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
              whiteSpace: "pre-line"
            }}>
              A/C - <span style={{ fontWeight: "700" }}>12930100021796</span>
              {"\n"}
              IFSC CODE - <span style={{ fontWeight: "700" }}>BARBOSOHAGP</span>
              <span style={{ color: "red", marginLeft: "4px" }}>*</span>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
                fontWeight: "bold",
              }}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
