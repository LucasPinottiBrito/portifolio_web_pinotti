
import React from 'react';
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const userData = {
    name: "Lucas Pinotti",
    title: "Computer Engineer",
    description: "It's nice to see you here! I'm a computer engineer with a passion for knowledgement. I love to learn new technologies and improve my skills every day. I hope you enjoy my portfolio and find it inspiring.",
    image: "profile.jpg", 
    aboutTitle: "about me",
    aboutSubtitle: "Driven by Curiosity, Powered by Code",
    aboutDescription: "I'm Lucas Pinotti de Brito, a 7th-semester Computer Engineering student with a technical background in Electronics. I bring hands-on experience in data analysis, embedded systems, and software development across web, desktop, and microcontroller platforms. I've worked with tools like Power Platform, Databricks, and backend frameworks such as Flask and FastAPI. With a proactive and self-taught mindset, I thrive on delivering results and leading impactful projects."
  };

  const skillsData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 17.5 15.5 10M12 12l2.25-2.25M8.5 14l1.5-1.5" />
        </svg>
      ),
      title: "Data Analytics & Dashboards",
      description: "Design and implementation of interactive dashboards and insightful data analysis using Power BI, Databricks, and Python (Pandas, NumPy)."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Web Development",
      description: "Development of responsive and modern web applications using Next.js, FastAPI, Flask, and Bootstrap 5."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M12 2H2v10h10V2z" />
          <path d="M22 12h-10v10h10V12z" />
          <path d="M12 12H2v10h10V12z" />
          <path d="M22 2h-10v10h10V2z" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Automating repetitive tasks and business processes with Power Automate, Power Apps, and Python scripts."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M15 2v2M15 20v2M2 15h2M20 15h2" />
        </svg>
      ),
      title: "Embedded Systems",
      description: "Prototyping and development with microcontrollers for IoT and electronics projects, including sensors and real-time data handling."
    }
  ];

  // Projects data
  const projectsData = [
    {
      title: "AI Branding SaaS",
      description: "Backend development of a SaaS application for company branding powered by artificial intelligence. The API, built with FastAPI and PostgreSQL, integrates with the ChatGPT API to automatically generate branding proposals based on client-provided data.",
      technologies: ["FastAPI", "PostgreSQL", "OpenAI API"],
      icon: "🤖",
      imageUrl: "/frameinternalproject.png",
    },
    {
      title: "DVR Web Client",
      description: "Web application to access DVR devices, enabling security camera viewing through a browser.",
      technologies: ["JavaScript", "HTML", "CSS", "WebSockets"],
      icon: "🎥",
      imageUrl: "/cam_app.png",
    },
    {
      title: "websocket-chat-python",
      description: "Real-time chat application using WebSockets with Python.",
      technologies: ["Python", "WebSockets"],
      icon: "💬",
      imageUrl: "/websocket.png",
    },
    {
      title: "Hermes Delivery",
      description: "Full system for managing, analyzing, and sending documents to clients. Includes a web application built with Next.js and Tailwind, a FastAPI backend with PostgreSQL, and a mobile app developed using Power Apps and Power Automate integrated with SharePoint.",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "Power Apps", "Power Automate", "SharePoint"],
      icon: "🚀",
      imageUrl: "/frameinternalproject.png",
    },
    {
      title: "PoolWaterQuality",
      description: "A comprehensive project using ESP8266, Azure Cloud, and Node.js to monitor and control pool water quality.",
      technologies: ["ESP8266", "Azure Cloud", "Node.js", "JavaScript"],
      icon: "💧",
      imageUrl: "/PoolWaterQuality.png",
    },
    {
      title: "Speed IO",
      description: "A funny web game, where you need to guess the car's speed to win!",
      technologies: ["Next.js", "Tailwind CSS", "FastAPI", "PostgreSQL"],
      icon: "🎮",
      imageUrl: "/speedio_gamescreen.png",
    },
    {
      title: "Telecommunication Maintenance Mobile App",
      description: "A mobile application designed to streamline and monitor the entire maintenance workflow for remote telecommunication towers and equipment. It enables technicians to efficiently log activities, track repairs, and access equipment data on-site, even offline.",
      technologies: ["React Native", "Expo", "SQLite", "TypeORM"],
      icon: "📡",
      imageUrl: "/mobile_app.png"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar name={userData.name} />
      
      <HeroSection 
        name={userData.name}
        title={userData.title}
        description={userData.description}
        image={userData.image}
      />
      
      <AboutSection 
        title={userData.aboutTitle}
        subtitle={userData.aboutSubtitle}
        description={userData.aboutDescription}
      />
      
      <SkillsSection skills={skillsData} />
      
      <ProjectsSection projects={projectsData} />
      
      <Footer name={userData.name} />
    </div>
  );
};

export default Index;
