import React from "react";
import Info from "./Cards/Info";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const info = [
    {
      user: "Single User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: " Unlimited Private Project",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      stautsReport: "Monthly Status Report",
      type:"FREE",
      rate:"$0/Month",
      proIcon: "fa-solid fa-regular fa-x",
      supIcon: "fa-solid fa-regular fa-x",
      domIcon: "fa-solid fa-regular fa-x",
      repIcon: "fa-solid fa-regular fa-x",
      project: "text-muted",
      support: "text-muted",
      domain: "text-muted",
      report: "text-muted"
    },
    {
      user: "5 User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: " Unlimited Private Project",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      stautsReport: "Monthly Status Report",
      type:"PLUS",
      rate:"$9/Month",
      proIcon: "fa-solid fa-check",
      supIcon: "fa-solid fa-check",
      domIcon: "fa-solid fa-regular fa-x",
      repIcon: "fa-solid fa-regular fa-x",
      project: "",
      support: "",
      domain: "text-muted",
      report: "text-muted"
    },
    {
      user: "Unlimited User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProject: " Unlimited Private Project",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      stautsReport: "Monthly Status Report",
      type:"PRO",
      rate:"$49/Month",
      proIcon: "fa-solid fa-check",
      supIcon: "fa-solid fa-check",
      domIcon: "fa-solid fa-check",
      repIcon: "fa-solid fa-check",
      project: "",
      support: "",
      domain: "",
      report: ""
    }
  ];
  return (
    <>
      <Info info={info} />
    </>
  );
};

export default App;
