export const siteConfig = {
  name: "Ashish",
  fullName: "Ashish Sharma",
  title: "AI/ML Engineer & IoT Developer",
  description:
    "Building intelligent systems at the intersection of AI, IoT, and Cloud. Passionate about solving real-world problems with machine learning and embedded systems.",
  url: "https://github.com/Ashish-Sharma54",
  email: "officialashish.332028@gmail.com",
  github: "https://github.com/Ashish-Sharma54",
  linkedin: "https://www.linkedin.com/in/aashishsharma54",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Deep learning models, NLP, computer vision, time series forecasting, and end-to-end ML pipelines for real-world applications.",
    icon: "Brain",
  },
  {
    title: "IoT & Embedded Systems",
    description:
      "Smart IoT solutions with ESP32, LoRaWAN, sensor networks, and real-time monitoring for agriculture, waste management, and defense.",
    icon: "Cpu",
  },
  {
    title: "Full-Stack Development",
    description:
      "Modern web applications with FastAPI, React, Next.js, Docker, and cloud-native deployment pipelines.",
    icon: "Code2",
  },
  {
    title: "Hardware-Accelerated ML",
    description:
      "ML model optimization using FPGA (Verilog), GPU-accelerated SVM classifiers, and hardware-software co-design for defense applications.",
    icon: "CircuitBoard",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Containerized applications with Docker, cloud deployment, CI/CD pipelines, and scalable infrastructure.",
    icon: "Cloud",
  },
  {
    title: "Data Analytics & Forecasting",
    description:
      "Time series analysis, predictive modeling, renewable energy forecasting, and data-driven decision making.",
    icon: "BarChart3",
  },
];

export const projects = [
  {
    title: "Intelligent Waste Management System",
    description:
      "IoT-powered smart dustbin system using ESP32 and LoRaWAN. Monitors fill-levels and gas detection across 50+ dustbins with 98% accuracy. Solar-powered for sustainability, with real-time alerts for efficient waste management.",
    image: "/projects/waste-mgmt.jpg",
    tags: ["C++", "ESP32", "LoRaWAN", "IoT", "Solar"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/-Intelligent-Waste-Management-System-Using-IoT-and-Solar-Power",
    featured: true,
  },
  {
    title: "AI WorkOS — Agentic Productivity & ML Reporting",
    description:
      "An intelligent work operating system with agentic AI capabilities for automated ML reporting, productivity tracking, and smart task orchestration.",
    image: "/projects/ai-workos.jpg",
    tags: ["JavaScript", "AI", "ML", "Automation"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/AI-WorkOS-Agentic-Productivity-ML-Reporting-System",
    featured: true,
  },
  {
    title: "Mental Health AI Assistant",
    description:
      "AI virtual assistant that proactively detects stress and depression triggers by analyzing phone and wearable data. Aims to provide early mental health support through intelligent monitoring.",
    image: "/projects/mental-health.jpg",
    tags: ["Python", "NLP", "Wearable Data", "AI"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Hybrid ML Models for Renewable Energy Forecasting",
    description:
      "Advanced hybrid ML models for predicting renewable energy output in smart grid applications. Combines multiple algorithms for improved forecasting accuracy.",
    image: "/projects/smart-grid.jpg",
    tags: ["Jupyter Notebook", "ML", "Energy", "Forecasting"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Hybrid-ML-Models-for-Renewable-Energy-Forecasting-in-Smart-Grid-Applications-",
    featured: true,
  },
  {
    title: "Fog-Aware Hardware-Accelerated SVM Target Detection",
    description:
      "Real-time target detection system using hardware-accelerated SVM classifiers optimized for foggy atmospheric conditions. Built for aerial surveillance applications.",
    image: "/projects/svm-target.jpg",
    tags: ["SVM", "Hardware Acceleration", "Computer Vision"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Fog-Aware-Hardware-Accelerated-SVM-Target-Detection-System-",
    featured: true,
  },
  {
    title: "Underwater Ship Identification via Acoustic AI",
    description:
      "AI system for underwater ship identification and distance estimation using acoustic signal processing. Designed for naval defense applications.",
    image: "/projects/acoustic-ai.jpg",
    tags: ["AI", "Acoustic Signal", "Defense", "DSP"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Underwater-Ship-Identification-and-Distance-Estimation-via-Acoustic-AI-",
    featured: true,
  },
  {
    title: "Real-Time Speech Emotion Recognition",
    description:
      "Real-time speech emotion detection system that analyzes audio input to classify emotional states using deep learning models.",
    image: "/projects/speech-emotion.jpg",
    tags: ["Jupyter Notebook", "NLP", "Deep Learning", "Audio"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Realtime-speech-emotion",
    featured: false,
  },
  {
    title: "Facial Emotion Detector",
    description:
      "Computer vision system that detects and classifies facial expressions in real-time using deep neural networks.",
    image: "/projects/facial-emotion.jpg",
    tags: ["Python", "OpenCV", "CNN", "Computer Vision"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Facial-emotion-detector",
    featured: false,
  },
  {
    title: "DRDO ML Hardware Project — SVM on FPGA",
    description:
      "Implemented ML classifiers (SVM) on FPGA using Verilog for defense applications. Combined signal and image processing datasets with hardware-level optimization.",
    image: "/projects/drdo-fpga.jpg",
    tags: ["Verilog", "FPGA", "SVM", "Defense"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Lung Cancer Detection — CNN",
    description:
      "CNN classifier to differentiate normal lung tissues from cancerous cells using a Kaggle dataset. Built with TensorFlow and OpenCV for medical imaging.",
    image: "/projects/lung-cancer.jpg",
    tags: ["TensorFlow", "CNN", "OpenCV", "Healthcare"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Lung-Cancer-Detection",
    featured: false,
  },
  {
    title: "Quote API — Dockerized FastAPI App",
    description:
      "A RESTful Quote API built with FastAPI, fully containerized with Docker for easy deployment and scaling.",
    image: "/projects/quote-api.jpg",
    tags: ["Python", "FastAPI", "Docker", "REST API"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Quote-API-Dockerized-FastAPI-App-",
    featured: false,
  },
  {
    title: "Missile vs Bird Classifier — GPU Optimized SVM",
    description:
      "Advanced GPU-accelerated SVM classification system for real-time missile vs bird detection in aerial surveillance and defense scenarios.",
    image: "/projects/missile-classifier.jpg",
    tags: ["Jupyter Notebook", "SVM", "GPU", "Defense"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/-Missile-vs-Bird-Classifier-using-SVM-GPU-Optimized-",
    featured: false,
  },
  {
    title: "Smart Solar Grid",
    description:
      "Intelligent solar energy grid management system with real-time monitoring, optimization, and predictive analytics for renewable energy distribution.",
    image: "/projects/smart-solar.jpg",
    tags: ["IoT", "Energy", "Optimization", "Monitoring"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/Smart-Solar-Grid",
    featured: false,
  },
  {
    title: "FlexiMind AI",
    description:
      "Flexible and adaptive AI system exploring novel approaches to machine learning problem-solving.",
    image: "/projects/fleximind.jpg",
    tags: ["Jupyter Notebook", "AI", "ML"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/FlexiMind-AI",
    featured: false,
  },
  {
    title: "TensorTonic Solutions",
    description:
      "Curated solutions to TensorTonic problems, demonstrating advanced ML and deep learning techniques.",
    image: "/projects/tensortonic.jpg",
    tags: ["Python", "ML", "Deep Learning"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/TensorTonic-Solutions",
    featured: false,
  },
  {
    title: "Telangana Crop Health Challenge",
    description:
      "ML-based crop health analysis and classification for agricultural applications in Telangana region.",
    image: "/projects/crop-health.jpg",
    tags: ["Jupyter Notebook", "Agriculture", "ML", "Image Classification"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/-Telangana-Crop-Health-Challenge",
    featured: false,
  },
  {
    title: "AI Wellness Recommendation Board",
    description:
      "AI-generated personalized wellness recommendations based on user data and health metrics.",
    image: "/projects/wellness.jpg",
    tags: ["JavaScript", "AI", "Wellness"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/AI-Generated-Wellness-Recommendation-Board",
    featured: false,
  },
  {
    title: "House Price Prediction",
    description:
      "Machine learning model for predicting house prices using regression techniques and feature engineering.",
    image: "/projects/house-price.jpg",
    tags: ["Jupyter Notebook", "Python", "Regression", "ML"],
    liveUrl: "",
    githubUrl: "https://github.com/Ashish-Sharma54/House-Price-Prediction-using-Machine-Learning-in-Python",
    featured: false,
  },
];

export const skills = {
  "AI / ML": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",
    "NLP",
    "CNN",
    "SVM",
    "Time Series",
    "Deep Learning",
    "Computer Vision",
  ],
  "Languages": ["Python", "C++", "JavaScript", "TypeScript", "Verilog", "HTML/CSS"],
  "IoT & Hardware": [
    "ESP32",
    "LoRaWAN",
    "Arduino",
    "FPGA",
    "Sensor Networks",
    "Embedded C",
    "Real-Time Systems",
  ],
  "Web & APIs": [
    "FastAPI",
    "React",
    "Next.js",
    "Node.js",
    "REST APIs",
    "TypeScript",
  ],
  "Cloud & DevOps": [
    "Docker",
    "GitHub Actions",
    "AWS",
    "Git",
    "Linux",
    "CI/CD",
  ],
  "Data & Analytics": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Jupyter",
    "Data Visualization",
    "Statistical Analysis",
  ],
};

export const experience = [
  {
    role: "AI/ML & IoT Research Engineer",
    company: "Personal & Academic Projects",
    period: "2024 — Present",
    description:
      "Building production-grade AI systems spanning NLP, computer vision, and IoT. Deploying hardware-accelerated ML models on FPGAs for defense applications (DRDO) and designing intelligent IoT solutions for waste management and agriculture.",
    technologies: ["Python", "TensorFlow", "ESP32", "LoRaWAN", "FPGA", "Verilog"],
  },
  {
    role: "Full-Stack & DevOps Developer",
    company: "Independent Projects",
    period: "2023 — Present",
    description:
      "Developed Dockerized FastAPI applications, portfolio sites with Next.js/TypeScript, and end-to-end ML pipelines. Implemented CI/CD workflows and containerized deployments for scalable web services.",
    technologies: ["FastAPI", "Docker", "Next.js", "TypeScript", "GitHub Actions"],
  },
  {
    role: "ML Engineer — DRDO Collaboration",
    company: "DRDO (Defence Research & Development Organisation)",
    period: "2023 — 2024",
    description:
      "Implemented SVM classifiers on FPGA using Verilog for real-time target detection. Combined signal and image processing datasets to build hardware-accelerated defense systems. Achieved optimized inference for fog-aware and aerial surveillance scenarios.",
    technologies: ["Verilog", "FPGA", "SVM", "Signal Processing", "C++"],
  },
  {
    role: "IoT Solutions Developer",
    company: "Academic & Research Projects",
    period: "2023 — 2024",
    description:
      "Designed and deployed IoT systems including a solar-powered smart dustbin network (50+ nodes, 98% accuracy) and a borewell automation system for agricultural water management. Built using ESP32, LoRaWAN, and cloud dashboards.",
    technologies: ["ESP32", "LoRaWAN", "C++", "IoT", "Solar Energy"],
  },
];

export const testimonials = [
  {
    name: "Dr. R. Kumar",
    role: "Faculty Mentor, DRDO Project",
    quote:
      "Ashish demonstrated exceptional skill in bridging ML theory with hardware implementation. His FPGA-based SVM work for defense applications was innovative and impactful.",
    avatar: "/avatars/kumar.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Team Lead, IoT Research Lab",
    quote:
      "His ability to design end-to-end IoT solutions — from sensor programming to cloud deployment — is remarkable. The waste management system he built was a standout achievement.",
    avatar: "/avatars/priya.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Classmate & Project Collaborator",
    quote:
      "Ashish brings a rare combination of deep technical skill and creative problem-solving. Every project he touches becomes smarter and more elegant.",
    avatar: "/avatars/rahul.jpg",
  },
];
