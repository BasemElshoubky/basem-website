// Import icons from react-icons
import { FaHome, FaUser, FaTools, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

// Sidebar component receives active state and setter from App.jsx
function Sidebar({ setActive, active }) {
  return (
    <div className="sidebar">

      {/* ===== HOME ===== */}
      <div 
        className={`menu-item ${active === "home" ? "active" : ""}`} // Apply active style if selected
        onClick={() => setActive("home")} // Change active page
      >
        <FaHome /> {/* Icon */}
        <span>HOME</span>
      </div>

      {/* ===== RESUME ===== */}
      <div 
        className={`menu-item ${active === "resume" ? "active" : ""}`}
        onClick={() => setActive("resume")}
      >
        <FaUser />
        <span>RESUME</span>
      </div>

      {/* ===== SKILLS ===== */}
      <div 
        className={`menu-item ${active === "skills" ? "active" : ""}`}
        onClick={() => setActive("skills")}
      >
        <FaTools />
        <span>SKILLS</span>
      </div>

      {/* ===== PROJECTS (NEW TAB) ===== */}
      <div 
        className={`menu-item ${active === "projects" ? "active" : ""}`}
        onClick={() => setActive("projects")}
      >
        <FaProjectDiagram />
        <span>PROJECTS</span>
      </div>

      {/* ===== CONTACT ===== */}
      <div 
        className={`menu-item ${active === "contact" ? "active" : ""}`}
        onClick={() => setActive("contact")}
      >
        <FaEnvelope />
        <span>CONTACT</span>
      </div>

    </div>
  );
}

export default Sidebar;