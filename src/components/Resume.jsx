import { motion } from "framer-motion";

function Resume() {

  // ===== EXPERIENCE =====
  const experience = [
    {
      title: "Group Leader - Volls Technology AB",
      date: "Feb 2019 - Apr 2023",
      location: "Malmö, Sweden",
      tasks: [
        "Installed and configured Milestone VMS for Smart City solutions",
        "Managed 24/7 recording for ~3000 Axis cameras across two cities",
        "Configured ANPR system for 30 cameras",
        "Implemented NEC facial recognition system"
      ]
    },
    {
      title: "IT Technician / Project Manager - Volls Technology KB",
      date: "Aug 2018 - Feb 2019",
      location: "Malmö, Sweden",
      tasks: [
        "Managed Environmental Monitoring Project for Newroz Telecom",
        "Configured RTU systems (fire, temperature, humidity, voltage)",
        "Installed CCTV monitoring systems",
        "Implemented FM200 fire suppression systems"
      ]
    },
    {
      title: "IT Employee - Danish Red Cross",
      date: "Mar 2012 - Feb 2018",
      location: "Frederiksberg, Denmark",
      tasks: [
        "Provided HelpDesk support (Citrix, network, desktops)",
        "Managed servers (Windows Server 2008/2012, AD, DHCP, Exchange)",
        "Designed IT equipment registration system",
        "Configured Cisco switches, VLANs, and IP phones",
        "Implemented backup using Veeam and disaster recovery",
        "Managed mobile devices (iOS & Android) via MDM"
      ]
    },
    {
      title: "IT & Database Administrator - Service Provider ApS",
      date: "Sep 2008 - Dec 2010",
      location: "Denmark",
      tasks: [
        "Designed and developed database system (FileMaker + PHP)",
        "Built claim system and RMA feedback loop",
        "Created repair, task, reporting, and order systems",
        "Developed inventory and spare parts tracking system"
      ]
    },
    {
      title: "IT Supporter - Danish Red Cross",
      date: "Aug 2007 - Sep 2008",
      location: "Denmark",
      tasks: [
        "Maintained servers, PCs, and printers",
        "Installed and deployed Windows systems",
        "Configured network devices (routers, switches)",
        "Implemented backup and disaster recovery"
      ]
    },
    {
      title: "IT Support / Network & Data Recovery - Care4You",
      date: "Jun 2006 - Jun 2007",
      location: "Denmark",
      tasks: [
        "Configured PCs and networks",
        "Performed troubleshooting and repairs",
        "Implemented backup and recovery solutions"
      ]
    },
    {
      title: "IT Teacher - Danish Red Cross",
      date: "Sep 2003 - Jun 2006",
      location: "Denmark",
      tasks: [
        "Taught ECDL and PC building courses",
        "Maintained computers in asylum centers"
      ]
    },
    {
      title: "Civil Engineer - Thefaf Al-Rafidaine Company",
      date: "1998 - 2002",
      location: "Baghdad, Iraq",
      tasks: [
        "Reviewed tenders and calculated pricing",
        "Negotiated contracts",
        "Maintained engineering projects"
      ]
    }
  ];

  // ===== EDUCATION =====
  const education = [
  {
    title: "Engineering Modules",
    place: "YrkesAkademin, Malmö, Sweden",
    date: "2023 - 2024",
    modules: [
      "Construction & Civil Engineering",
      "Work Environment (BAM/BAS)",
      "Fire & Safety",
      "Building Legislation & Construction Technology",
      "CAD: AutoCAD, Revit, Tekla, BIM",
      "Energy Efficiency",
      "Property Maintenance",
      "Property Economics",
      "Business Economics",
      "Installation Coordination",
      "Installation Technology",
      "Law (Real Estate & Contracts)",
      "Cost Estimation",
      "Leadership & Communication",
      "Production Planning & Management",
      "Project Management",
      "Technical Drawing",
      "Control Systems (Basic Electrical)"
    ]
  },
  {
    title: "MCSA / MCP / MCTS Certifications",
    place: "Microworld, Denmark",
    date: "2007 - 2008"
  },
  {
    title: "Bachelor of Civil Engineering",
    place: "Al-Mustansiriya University, Iraq",
    date: "1991 - 1996"
  }
];

  return (
    <div className="resume">

      <div className="page-header">
        <h2>Resume</h2>
      </div>

      {/* EXPERIENCE */}
      <div className="section">
        <h3>Experience</h3>

        <div className="timeline">
          {experience.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4>{job.title}</h4>
                <p className="date">
                  {job.date} | {job.location}
                </p>

                <ul>
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="section">
        <h3>Education</h3>

       {education.map((edu, index) => (
  <div className="job" key={index}>

    <h4>{edu.title}</h4>
    <p className="date">
      {edu.place} {edu.date && `| ${edu.date}`}
    </p>

    {/* If modules exist, show them */}
    {edu.modules && (
      <ul className="modules">
        {edu.modules.map((mod, i) => (
          <li key={i}>{mod}</li>
        ))}
      </ul>
    )}

  </div>
))}

      </div>

    </div>
  );
}

export default Resume;