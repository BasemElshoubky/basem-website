import { motion } from "framer-motion";
import { FaServer, FaNetworkWired, FaDatabase, FaTools, FaCode, FaDraftingCompass } from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "System Administration", level: 90, icon: <FaServer />, color: "#3b82f6" },
    { name: "Network Design & Cisco", level: 85, icon: <FaNetworkWired />, color: "#10b981" },
    { name: "Database Programming (SQL / FileMaker)", level: 85, icon: <FaDatabase />, color: "#f59e0b" },
    { name: "IT Support & Troubleshooting", level: 90, icon: <FaTools />, color: "#ef4444" },
    {
  name: "Web Development (React, HTML, JavaScript)",
  level: 85,
  icon: <FaCode />,
  color: "#8b5cf6",
  description: "Building modern web applications using React, HTML, JavaScript, and Visual Studio"
},
  {
    name: "CAD & BIM Tools (AutoCAD, Revit, Tekla)",
    level: 85,
    icon: <FaDraftingCompass />,
    color: "#0ea5e9",
    description: "Engineering design and BIM modeling"
  }

  ];

  return (
    <div className="skills">

      <div className="page-header">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

            <div className="skill-icon" style={{ background: skill.color }}>
              {skill.icon}
            </div>

            <h4>{skill.name}</h4>

            <div className="bar">
              <div 
                className="fill"
                style={{ width: skill.level + "%", background: skill.color }}
              ></div>
            </div>

            <span className="percent">{skill.level}%</span>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Skills;