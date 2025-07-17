
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Expense Tracker",
    description: "A React-based web app to track daily expenses with chart visualizations and GitHub Pages deployment.",
    image: "/imgs/p1.png",
    tags: ["React", "Chart.js", "GitHub Pages", "Tailwind CSS"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/Personal-Expense-Tracker",
      live: "", // Add if you deploy
    },
  },
  {
    id: 2,
    title: "Organ Donation & Procurement ",
    description: "A full-stack Flask + MySQL system to manage organ donation registrations, analytics, and procurement workflows.",
    image: "/imgs/p2.png",
    tags: ["Flask", "MySQL", "CRUD", "Render Deployment"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/Organ-Donation-And-Procurement-Management",
      live: "", // Add if deployed
    },
  },
  {
    id: 3, // Use the next ID in sequence
    title: "CarConnect - Blockchain Carpooling Platform",
    description: "A blockchain-powered carpooling platform ensuring transparent and secure ride-sharing using smart contracts for trustless transactions.",
    image: "/imgs/p3.png", // Replace with actual image in your /imgs folder
    tags: ["Blockchain", "Smart Contracts", "React", "Solidity", "Web3"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/CarConnect.git",
      live: "" // Add live link if deployed, else keep empty
    }
  },
  {
    id: 4,
    title: "AI-Powered Blog Writer",
    description: "An AI-based blog writing tool built with Streamlit and OpenAI API. Users can generate blogs by selecting topics and tones.",
    image: "/imgs/p4.png",
    tags: ["Python", "Streamlit", "OpenAI API", "AI Content Generation"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/AI-Powered-Blog-Writer",
      live: "", // Add Streamlit Cloud link if deployed
    },
  },
  {
    id: 5,
    title: "Library Management App",
    description: "A Java-based library management system with MySQL backend for book issue, return, and member management.",
    image: "/imgs/p5.png",
    tags: ["Java", "MySQL", "JDBC", "OOP"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/Library-Management-App",
      live: "",
    },
  },
  {
    id: 6,
    title: "Flappy Bird Game",
    description: "A Java-based Flappy Bird clone developed using JFrame and Graphics2D, with custom game loop and collision logic.",
    image: "/imgs/p6.png",
    tags: ["Java", "Swing", "Graphics2D"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/FlappyBirdGame",
      live: "",
    },
  },
  {
    id: 7,
    title: "Real Estate Website",
    description: "A frontend Real Estate landing page developed using React and Tailwind CSS for showcasing property listings.",
    image: "/imgs/p7.png",
    tags: ["React", "Tailwind CSS", "Frontend Development"],
    links: {
      github: "https://github.com/Aishwaryaa-Anand/Real-Estate",
      live: "", // Add if deployed
    },
  },
];
