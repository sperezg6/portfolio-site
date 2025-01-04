'use client'
import React, { useState } from 'react';
import { Github, Linkedin, Sun, Moon, Camera, Music } from 'lucide-react';


const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const baseStyles = isDarkMode ? {
    bg: 'bg-gray-900',
    secondaryBg: 'bg-gray-800',
    text: 'text-gray-100',
    secondaryText: 'text-gray-400',
    border: 'border-gray-700',
    card: 'bg-gray-800',
    hover: 'hover:bg-gray-700'
  } : {
    bg: 'bg-white',
    secondaryBg: 'bg-gray-50',
    text: 'text-gray-900',
    secondaryText: 'text-gray-600',
    border: 'border-gray-200',
    card: 'bg-white',
    hover: 'hover:bg-gray-50'
  };

  const projects = [
    {
      title: "Musical Modeling and Generation: An Approach Using Neural Networks and MIDI Input",
      description: "A deep learning model for generating original music compositions using LSTM and MIDI notes.",
      tech: ["Python", "TensorFlow", "LSTM", "MIDI", "Music Generation"],
      status: "In Progress",
      type: "Thesis Project",
      github: "https://github.com/sperezg6/Tesina"
    },
    {
      title: "Chatbot Customer Service",
      description: "This project demonstrates the process of building a customer support chatbot using Python and the Hugging Face Transformers library. The chatbot is trained on a dataset of conversation logs to understand and respond to customer inquiries.",
      tech: ["Python", "Hugging Face", "Chatbot", "Sklearn", "Pytorch"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/chatbot-cs"
    },
    {
      title: "Photography Portfolio",
      description: "Personal portfolio showcasing photography work and projects.",
      tech: ["HTML", "CSS"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/photo_portafolio.io"
    },
    {
      title: "Ultimate Tic-Tac-Toe",
      description: "Ultimate Tic-Tac-Toe is an advanced version of the classic Tic-Tac-Toe game, implemented in Python. This implementation features a player versus AI gameplay, where the AI uses the Minimax algorithm with Alpha-Beta pruning to make intelligent moves.",
      tech: ["Python", "IA", "Minimax"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/ultimate_tic_tac_toe"
    },
    {
      title: "CDMX Metro Router",
      description: "A sophisticated route planning system for Mexico City's Metro network, implementing a hybrid reasoning approach combining Case-Based Reasoning (CBR) and Model-Based Reasoning, inspired by the Router system described in CogSci 1993.",
      tech: ["Python","Router"],
      type: "Academic Project",
      github: "https://github.com/sperezg6/cdmx-metro-router"
    },
    {
      title: "3D Work Portafolio",
      description: "Personal portfolio showcasing professional work and projects.",
      tech: ["React", "Three.js", "Tailwind"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/work-portafolio"
    },
    {
      title: "Evolutionary Calendar Algorithm",
      description: "This Python tool is designed to create and evaluate schedules for Premier League football teams, optimizing for fairness and travel distance. It uses evolutionary algorithms to generate schedules where teams play each other once at home and once away, with attention to reducing consecutive home or away games and balancing the number of games played on different days of the week.",
      tech: ["Python", "Evolutionary Algorithms"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/evolutionaty_calendar_algorithm"
    },
    {
      title: "Domino Minimax Algorithm",
      description: "This project implements a Minimax algorithm with Alpha-Beta pruning to play the game of Dominoes. The game is played between two players, where the AI player uses the Minimax algorithm to make intelligent moves.",
      tech: ["Python", "Minimax"],
      type: "Personal Project",
      github: "https://github.com/sperezg6/DominoIA",
    },

  ];

  const experience = [
    {
      role: "Data Analytics Engineer",
      company: "mattilda",
      period: "Sept 2024 - Present",
      description: "Developing data-driven solutions to optimize business processes and improve decision-making.",
      highlights: [
        "Developed automated data processing pipelines",
        "Implemented machine learning models for predictive analytics",
        "Collaborated with cross-functional teams on technical solutions"
      ]
    },
    {
      role: "Tech Analyst",
      company: "mattilda",
      period: "May 2023 - Sept 2024",
      description: "Leading technical analysis and implementation of data-driven solutions.",
      highlights: [
        "Developed automated data processing pipelines",
        "Implemented machine learning models for predictive analytics",
        "Collaborated with cross-functional teams on technical solutions"
      ]
    },
    {
      role: "Strategy Analyst",
      company: "Resuelve tu Deuda | Go Bravo",
      period: "Oct 2022 - May 2023",
      description: "Analyzed and developed strategies to optimize business processes and sales.",
      highlights: [
        "Developed a data-driven strategy to increase sales by 20%",
        "Optimized customer acquisition process using machine learning models",
        "Collaborated with cross-functional teams on technical solutions"
      ]
    },
    {
      role: "Marketing Intern",
      company: "ITAM",
      period: "Nov 2021 - Sept 2022",
      description: "Developed and implemented marketing strategies to increase brand awareness.",
      highlights: [
        "Developed a data-driven strategy to increase brand awareness by 30%",
        "Optimized customer acquisition process using machine learning models",
        "Collaborated with cross-functional teams on technical solutions"
      ]
    },
  ];

  const skills = [
    "Python","Databricks","Quicksight", "TensorFlow", "PyTorch", "Machine Learning",
    "React", "JavaScript", "AWS", "SQL", "Power BI", "Tableau", "Data Visualization"

  ];

  return (
    <div className={`min-h-screen ${baseStyles.bg} ${baseStyles.text}`}>
      <div className="flex">
        {/* Left Sidebar */}
        <div className={`w-80 min-h-screen p-6 border-r ${baseStyles.border} flex-shrink-0`}>
          {/* Theme Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${baseStyles.hover}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Profile */}
          <div className="mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
              <img 
                src="external/profile_picture.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">Santiago Pérez Gutiérrez</h1>
            <p className={`${baseStyles.secondaryText} mb-4`}>Data Analytics Engineer & Computer Engineer</p>
            <div className="flex gap-2 mb-4">
              <Camera size={20} className={baseStyles.secondaryText} />
              <Music size={20} className={baseStyles.secondaryText} />
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">About Me</h2>
            <p className={`${baseStyles.secondaryText} text-sm mb-4`}>
              23-year-old Computer Engineer passionate about AI, Machine Learning and Software Development,
              currently working on innovative solutions at mattilda while pursuing my thesis in Music Generation.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 rounded-full text-xs ${baseStyles.secondaryBg} ${baseStyles.secondaryText}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <div className="mb-8">
            <a 
              href="external/cv.pdf" 
              download
              className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg 
                ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} 
                text-white font-medium transition-colors`}
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/sperezg6" className={`${baseStyles.secondaryText} hover:${baseStyles.text}`}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/santiago-pérez-61a0421a3/" className={`${baseStyles.secondaryText} hover:${baseStyles.text}`}>
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/sperezg6/" 
               className={`${baseStyles.secondaryText} hover:${baseStyles.text}`}
               title="LeetCode"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
            
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Featured Projects */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`p-6 border ${baseStyles.border} hover:border-gray-400 transition-all rounded-lg shadow-sm hover:shadow-md`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className={`text-xs ${baseStyles.secondaryText}`}>
                      {project.type}
                    </span>
                  </div>
                  <p className={`${baseStyles.secondaryText} mb-4 text-sm`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 text-xs rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Github size={16} />
                      View Repository
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-xl font-bold mb-6">Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className={`p-6 border ${baseStyles.border} hover:border-gray-400 transition-colors`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className={`${baseStyles.secondaryText} text-sm`}>{job.company}</p>
                    </div>
                    <span className={`text-sm ${baseStyles.secondaryText}`}>{job.period}</span>
                  </div>
                  <p className={`${baseStyles.secondaryText} mb-4 text-sm`}>{job.description}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className={`${baseStyles.secondaryText} text-sm`}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;