// EDIT THIS FILE FIRST. Everything personal lives here.

// Resolves files in /public so they work with any deployment base path.
export const publicPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Mahmudul Hassan Shoyaive',
  monogram: 'MS',
  title: 'Full Stack Web Developer',

  heroText:
    'I build full-stack web applications using modern frontend and backend technologies.\nCurrently expanding my knowledge in Data Science and Machine Learning.',

  availability: 'Open to Internship and Job Opportunities',

  footerText:
    'Full stack web developer building practical applications and learning to bring AI into real software.',

  about: [
    "I'm Mahmudul Hassan Shoyaive, a Software Engineering student at Daffodil International University, passionate about building practical, real-world software solutions and exploring the potential of Artificial Intelligence and Machine Learning to solve meaningful problems.",
    'I build full stack applications and e-commerce websites, and I explore AI integration and automation to make them more useful and efficient.',
    'I am also learning Data Science and Machine Learning, including data analysis, visualization, and Large Language Models. My goal is to become a skilled software engineer who builds intelligent, data-driven applications.',
  ],

  facts: [
    { label: 'Degree', value: 'BSc in Software Engineering' },
    { label: 'University', value: 'Daffodil International University' },
    { label: 'Primary Focus', value: 'Full Stack Web Development' },
    {
      label: 'Additional Interests',
      value: 'AI Automation, Data Science, and Machine Learning',
    },
    {
      label: 'Career Status',
      value: 'Open to Internship and Job Opportunities',
    },
  ],

  // Add, remove or reorder entries freely. `focus` is optional.
  education: [
    {
      degree: 'BSc in Software Engineering',
      institution: 'Daffodil International University',
      location: 'Bangladesh',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Royal Media College',
      location: 'Mymensingh, Bangladesh',
    },
  ],

  // Profile photo: put the file in src/assets/ named profile.jpg
  // profile.jpeg, profile.png and profile.webp also work.
  // See ProfileImage.jsx.
  photoAlt: 'Portrait of Mahmudul Hassan Shoyaive',

  // Resume: put your PDF in the /public folder named resume.pdf
  resume: {
    path: publicPath('resume.pdf'),
    downloadName: 'Mahmudul-Hassan-Shoyaive-CV.pdf',
  },

  // Contact information
  contact: {
    phone: '01811516359',
    email: 'shoyaive301@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mahmudul-hassan-shoyaive-swe/',
    github: 'https://github.com/shoyaive056',
    facebook: 'https://www.facebook.com/shoyaive056/',
  },

  // Used by the Send Email button. Edit freely.
  emailTemplate: {
    subject: 'Opportunity for Mahmudul Hassan Shoyaive',
    body: 'Hello Mahmudul,\n\nI found your portfolio and would like to talk with you about an opportunity.\n\nBest regards,',
  },
};