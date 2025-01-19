import thesocialedge1 from "./theSocialEdge1.png";
import thesocialedge2 from "./theSocialage2.png";
import thesocialedgebackend from "./TheSocialEdgeBackend.png";
import smartfront0 from "./smartfront0.png";
import smartfront1 from "./smartfront1.png";
import smartfront2 from "./smartfront2.png";
import smartfront3 from "./smartfront3.png";
import smartfront4 from "./smartfront4.png";
import smartOrch from "./smartOrch.jpg";
import smartFlow from "./smartFlow.png";
import SmartDev from "./SmartDev.png";
import rag from "./rag.jpg";
import thesocialDev from "./thesocialDev.png";
import linkedin from "./LinkedIn.png";

export const projects = {
  FrontEnd: [
    {
      title: "SmartInbox",
      description:
        "Built a context-aware email management app with ReactJS and Tailwind CSS, streamlining email organization and boosting user productivity through an intuitive and responsive UI.",
      images: [smartfront0, smartfront1, smartfront2, smartfront3, smartfront4],
      technologies: ["React", "Vite" ,"Tailwind CSS"],
      Github: "https://github.com/MRPERFECT0603/SmartInbox",
    },
    {
      title: "TheSocialEdge",
      description:
        "Led ReactJS frontend development for scalable social media platform, boosting user engagement with intuitive, responsive UI.",
      images: [thesocialedge1, thesocialedge2],
      technologies: ["React", "Tailwind CSS"],
      Github:
        "https://github.com/MRPERFECT0603/TheSocialEdge-FrontEnd-Microservices",
    },
    {
      title: "LinkedIn-Clone",
      description:
        "Engineered the development of a dynamic social media platform using React, prioritizing user experience and innovation. Utilizing Redux for state management and Firebase for secure, real-time data storage, I designed an intuitive UI that enhances user engagement.",
      images: [linkedin, linkedin],
      technologies: ["React", "Redux", "Firebase"],
      Github: "https://github.com/MRPERFECT0603/LinkedIn-Clone",
    },
  ],
  BackEnd: [
    {
      title: "SmartInbox Backend",
      description:
        "Architected a context-aware email management system using a microservice architecture. Each microservice was designed for modularity, handling tasks like context generation, Gmail API integration, and personalized email responses. Built with Node.js, Express.js, and MongoDB, the backend ensures high availability, fault tolerance, and scalability.",
      images: [smartOrch, smartFlow],
      technologies: [
        "Node.Js",
        "Express.Js",
        "MongoDB",
        "Gmail API",
        "Microservice Architecture",
      ],
      Github:
        "https://github.com/MRPERFECT0603/SmartInbox",
    },
    {
      title: "TheSocialEdge",
      description:
        "Developed a scalable social media platform using Node.js, Express.js, and MongoDB. Utilized Kubernetes for microservices orchestration, ensuring minimal downtime and seamless scalability.",
      images: [thesocialedgebackend, thesocialedgebackend],
      technologies: ["Node.Js", "Express.Js", "MongoDB", "Microservice Architecture"],
      Github:
        "https://github.com/MRPERFECT0603/TheSocialEdge-Backend-Microservices",
    },
  ],
  DevOps: [
    {
      title: "SmartInbox",
      description:
      "Built a microservices-based email management system using RabbitMQ for interservice communication, deployed on Kubernetes for scalability and fault tolerance. Utilized Docker for containerization and implemented a CI/CD pipeline with GitHub Actions to ensure seamless and reliable deployments.",
      images: [smartOrch, smartFlow ,SmartDev],
      technologies: ["Docker", "Kubernetes", "RabbitMQ", "GitHub Actions"],
      Github:
        "https://github.com/MRPERFECT0603/SmartInbox",
    },
    {
      title: "TheSocialEdge",
      description:
        "Implemented a microservices architecture on Kubernetes to ensure minimal downtime and seamless scalability for a social media platform. Integrated Kafka for efficient interservice communication, enhancing real-time data processing. Implemented a robust CI/CD pipeline with GitHub Workflow. Leveraged AWS hosting to handle increased user traffic with uninterrupted service availability.",
      images: [thesocialedgebackend, thesocialDev],
      technologies: ["Docker", "Kubernetes", "AWS", "Kafka"],
      Github:
        "https://github.com/MRPERFECT0603/TheSocialEdge-Backend-Microservices",
    },
  ],
  MachineLearning: [
    {
      title: "SmartInbox Email Generation",
      description:
        "Developed a custom Retrieval-Augmented Generation (RAG) model for generating context-aware email responses. Integrated Ollama for enhanced language understanding and natural language generation. Leveraged advanced retrieval techniques to provide precise, personalized email suggestions based on user-specific context and past interactions.",
      images: [rag, smartFlow],
      technologies: ["RAG Model", "Ollama", "Context Retrieval", "NLP"],
      Github: "https://github.com/MRPERFECT0603/SmartInbox",
    },
    {
      title: "ASTra (Abstract Syntax Tree Analyzer)",
      description:
        "Developed a tool for code analysis and plagiarism detection using Abstract Syntax Trees (ASTs). Enhanced accuracy by integrating file content for TF-IDF vectorization with scikit-learn. Implemented PCA and t-SNE for code similarity visualization. Improved analysis precision through optimized preprocessing.",
      images: [linkedin, linkedin],
      technologies: [
        "Abstract Syntax Trees",
        "TF-IDF vectors",
        "scikit-learn",
        "PCA",
      ],
      Github: "https://github.com/MRPERFECT0603/ASTra",
    },
  ],
};


export const resumeLink = "https://drive.google.com/file/d/1oaPmQhBWTiTl3OZLeAjIDUxjBD1Msdmp/view?usp=sharing"
