import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/picture-3.png";
import project4 from "../assets/projects/picture-4.png";

export const HERO_CONTENT = `I am a Software Engineer and IT Solutions Specialist with a strong foundation in creating robust and scalable web applications. With experience gained through academic projects and internships, I have honed my skills in front-end technologies like React and back-end technologies like Node.js and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer and IT Solutions Specialist with a passion for creating efficient and user-friendly web applications. My journey in web development began with my diploma studies and practical exposure through academic projects, where I worked with technologies like React, Node.js, MySQL, and MongoDB. I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "IT Assistant",
    company: "Nethmira Apparel",
    description: `
      - Provided technical support to staff.
      - Managed and maintained IT infrastructure.
      - Ensured the smooth operation of all digital systems within the company.
      - Troubleshot hardware and software issues.
    `,
    technologies: ["Windows", "Networking", "Hardware", "Software Maintenance"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website built using Laravel 10,with responsive adim-panel, featuring product listing, shopping cart, user authentication, and a secure checkout process.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Inventory Management System",
    image: project4,
    description:
      "A system designed to manage and track inventory efficiently, featuring real-time stock updates, reporting, and user management. Built with Eclipse IDE for seamless Java development and deployment.",
    technologies: ["Java", "MySQL", "Eclipse IDE", "Swing", "JDBC"],
},
];

export const CONTACT = {
  address: "Narammala,Sri Lanka ",
  phoneNo: "",
  email: "dishanmaduranga7@gmail.com",
};
