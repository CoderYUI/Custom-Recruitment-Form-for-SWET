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

const forms = [
  { key: "video", label: "Video Editor", component: VideoEditorForm },
  { key: "graphic", label: "Graphic Designer", component: GraphicDesignerForm },
  { key: "frontoffice", label: "Front Office", component: FrontOfficeForm },
  { key: "marketing", label: "Marketing", component: MarketingForm },
  { key: "technical", label: "Technical", component: TechnicalForm },
  { key: "rnd", label: "R&D", component: ResearchDevelopmentForm },
  { key: "content", label: "Content", component: ContentForm },
  { key: "socialmedia", label: "Social Media", component: SocialMediaForm },
  { key: "management", label: "Management", component: ManagementForm },
  { key: "design", label: "Design", component: DesignForm },
  { key: "pr", label: "PR", component: PRForm },
];

export default function App() {
  const [selectedFormKey, setSelectedFormKey] = useState(forms[0].key);

  const SelectedFormComponent = forms.find(f => f.key === selectedFormKey)?.component;

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      {/* Removed the <h1> Job Application Form heading */}

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {forms.map((form) => (
          <button
            key={form.key}
            onClick={() => setSelectedFormKey(form.key)}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              cursor: "pointer",
              backgroundColor: selectedFormKey === form.key ? "#b71c1c" : "#eee",
              color: selectedFormKey === form.key ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            {form.label}
          </button>
        ))}
      </div>

      <div>
        {SelectedFormComponent ? <SelectedFormComponent /> : <p>Form not found</p>}
      </div>
    </div>
  );
}
