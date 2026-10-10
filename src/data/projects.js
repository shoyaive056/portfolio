// Project entries based on the project details provided in the resume.
// Keep liveUrl empty if no live demo is available.
// Keep repoUrl empty if the repository URL is not confirmed.
// For thumbnails, add images to public/projects/ and use paths such as:
// 'projects/ledger-dashboard.png'

export const projects = [
  {
    id: 'ledger',
    title: 'Ledger: E-Commerce Admin Dashboard',
    category: 'Frontend Development',
    description:
      'A React-based e-commerce admin dashboard using the DummyJSON Products API, featuring product management, pagination, debounced search, category filtering, optimistic updates, and bulk operations.',
    technologies: [
      'React 19',
      'Vite',
      'Redux Toolkit',
      'React Router',
      'Tailwind CSS',
      'Axios',
      'REST API',
    ],
    thumbnail: 'projects/ledger.webp',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'client-portfolio',
    title: 'Portfolio Website for an Electrical and Electronics Engineer',
    category: 'Client Project',
    description:
      'A personal portfolio website built for a client, presenting professional experience, projects, and contact information, with a light and dark theme toggle.',
    // EDIT THIS LIST: write the technologies you actually used for this project.
    technologies: [
      'React',
      'Vite',
      'CSS',
    ],
    thumbnail: 'projects/client-portfolio.webp',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'ai-chat-assistant',
    title: 'Personal AI Chat Assistant',
    category: 'AI Integration',
    description:
      'A modular, extensible personal AI assistant with chat, document analysis (PDF, DOCX, TXT), conversation history, and dark mode. Built with React, FastAPI, and a swappable AI provider layer (Gemini, Groq, OpenAI).',
    technologies: [
      'React',
      'FastAPI',
      'Gemini',
      'Groq',
      'OpenAI',
    ],
    thumbnail: '',
    liveUrl: '',
    repoUrl: 'https://github.com/shoyaive056/Personal-AI-Chat-Assistant',
  },
  {
    id: 'online-code-editor',
    title: 'Online Code Editor',
    category: 'Group Project',
    description:
      'A browser-based learning tool for writing and previewing HTML, CSS, and JavaScript. Contributed to the authentication system, including user registration and login functionality.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Ace Editor',
      'PHP',
      'Authentication',
    ],
    thumbnail: '',
    liveUrl: '',
    repoUrl: 'https://github.com/Rakib0Diu/OnlineCodeEditor',
  },
  {
    id: 'pizza-billing',
    title: 'Pizza Billing System',
    category: 'Java Application Development',
    description:
      'A console-based Java application for managing pizza orders and generating itemized bills in BDT. Uses object-oriented classes to handle orders, pricing, toppings, subtotals, and tax calculations.',
    technologies: [
      'Java',
      'Object-Oriented Programming',
      'Billing Logic',
    ],
    thumbnail: '',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    category: 'Frontend Development',
    description:
      'A personal portfolio frontend built with React and Vite to present professional information, technical skills, education, and projects.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
      'ESLint',
    ],
    thumbnail: '',
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 't2s',
    title: 'T2S: AI-Powered Platform for Student Skill Development',
    category: 'AI Platform',
    description:
      'An AI-powered platform focused on student skill development, mentorship, collaboration, and career discovery.',
    technologies: [
      'AI Integration',
      'Student Skill Development',
      'Platform Design',
    ],
    thumbnail: '',
    liveUrl: '',
    repoUrl: '',
  },
];