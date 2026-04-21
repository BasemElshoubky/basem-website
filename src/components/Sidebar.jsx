import { FaHome, FaUser, FaTools, FaEnvelope } from "react-icons/fa";

function Sidebar({ setActive, active }) {
  return (
    <div className="sidebar">

      <div 
        className={`menu-item ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      >
        <FaHome />
        <span>HOME</span>
      </div>

      <div 
        className={`menu-item ${active === "resume" ? "active" : ""}`}
        onClick={() => setActive("resume")}
      >
        <FaUser />
        <span>RESUME</span>
      </div>

      <div 
        className={`menu-item ${active === "skills" ? "active" : ""}`}
        onClick={() => setActive("skills")}
      >
        <FaTools />
        <span>SKILLS</span>
      </div>

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