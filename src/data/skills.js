// Only the main skills are listed. Add or remove items freely.
//   icon : key used in components/SkillGroup.jsx (group heading icon)
//   logo : optional key from components/BrandLogo.jsx. Items with a logo
//          appear as logo tiles, items without one appear as simple chips.
export const skillGroups = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    items: [
      { name: 'JavaScript (ES6+)', logo: 'javascript' },
      { name: 'Python', logo: 'python' },
      { name: 'Java', logo: 'java' },
      { name: 'C', logo: 'c' },
      { name: 'C++', logo: 'cpp' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: 'globe',
    items: [
      { name: 'HTML5', logo: 'html' },
      { name: 'CSS3', logo: 'css' },
      { name: 'React.js', logo: 'react' },
      { name: 'Redux Toolkit', logo: 'redux' },
      { name: 'React Router', logo: 'router' },
      { name: 'Tailwind CSS', logo: 'tailwind' },
    ],
  },
  {
    id: 'api',
    title: 'API & Application Development',
    icon: 'code',
    items: [
      { name: 'Axios', logo: 'axios' },
      { name: 'RESTful API Integration' },
      { name: 'CRUD Operations' },
    ],
  },
  {
    id: 'databases',
    title: 'Database Management',
    icon: 'database',
    items: [
      { name: 'MySQL', logo: 'mysql' },
      { name: 'MongoDB', logo: 'mongodb' },
      
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Workflow',
    icon: 'code',
    items: [
      { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github' },
      { name: 'VS Code', logo: 'vscode' },
      { name: 'Vite', logo: 'vite' },
    ],
  },
  {
    id: 'data',
    title: 'Data Science & Machine Learning',
    icon: 'chart',
    note: 'Currently learning',
    items: [
      { name: 'Data Analysis' },
      { name: 'Data Visualization' },
      { name: 'Machine Learning ' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence & Automation',
    icon: 'sparkles',
    note: 'Exploring through projects',
    items: [
      { name: 'AI API Integration' },
      { name: 'Large Language Models (LLMs)' },
      { name: 'AI-Assisted Workflow Automation' },
    ],
  },
];