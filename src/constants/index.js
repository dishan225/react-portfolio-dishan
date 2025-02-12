import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/picture-3.png";
import project4 from "../assets/projects/picture-4.png";

export const HERO_CONTENT = `I am an Aspiring Software Engineer and Self-Taught Developer with a passion for creating impactful software solutions. With hands-on experience gained through personal projects and online courses, I have developed strong skills in front-end and back-end development. I am constantly learning and improving my expertise to stay on top of the latest technologies. My goal is to contribute to innovative projects that solve real-world problems and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As an Aspiring Software Engineer and Self-Taught Developer, I am committed to continuous learning and growth in the tech industry. My journey began with a deep curiosity about software development, which led me to explore technologies like React, Node.js, MySQL, and MongoDB through online courses and personal projects. I thrive on solving complex challenges and building solutions that make a positive impact. Outside of coding, I enjoy exploring emerging technologies, participating in developer communities, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Intern",
    company: "Self-Initiated Internship",
    description: `
      - Learned basic project management and software development lifecycle concepts.
      - Developed a portfolio project showcasing web development skills.
    `,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2023 - Present",
    role: "Self-Initiated Internship (Online Courses)",
    company: "Self-Learning",
    description: `
      - Completed online courses in cloud technologies from Google Cloud Platform, LinkedIn, and Microsoft Azure.
      - Gained hands-on experience in cloud computing, networking, and software development.
      - Applied acquired skills to real-world scenarios and projects.
    `,
    technologies: ["Google Cloud", "Microsoft Azure", "Cloud Computing", "Networking", "Software Development"],
  }
];


export const PROJECTS = [
    {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubLink: "https://github.com/dishan225/react-portfolio-dishan",
  },
    
  {
    title: "Inventory Management System",
    image: project4,
    description:
      "A system designed to manage and track inventory efficiently, featuring real-time stock updates, reporting, and user management. Built with Eclipse IDE for seamless Java development and deployment.",
    technologies: ["Java", "MySQL", "Eclipse IDE", "Swing", "JDBC"],
    githubLink: "https://github.com/dishan225/JavaInventoryApp.",
    
  },
  {
    title: "News App",
    image: news, // Replace with the correct image
    description:
      "A news application built with Kotlin, Firebase, and News API, allowing users to browse the latest news from multiple sources with categorized filtering, real-time updates, and a modern UI.",
    technologies: ["Kotlin", "Firebase", "News API", "Jetpack Compose"],
    githubLink: "https://github.com/dishan225/news-app-kotlin",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website built using Laravel 10,with responsive adim-panel, featuring product listing, shopping cart, user authentication, and a secure checkout process.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/your-username/project-1",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    githubLink: "https://github.com/your-username/project-1",
    
  },

];

export const CONTACT = {
  address: "Sri Lanka ",
  phoneNo: "",
  email: "dishanmaduranga7@gmail.com",
};
