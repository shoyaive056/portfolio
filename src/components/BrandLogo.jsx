import { FaGithub, FaLinkedin, FaFacebook, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa6';
import {
  SiReact, SiJavascript, SiPython, SiC, SiCplusplus, SiMysql, SiMongodb,
  SiRedux, SiTailwindcss, SiGit, SiVite, SiReactrouter, SiAxios,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Official brand colors. These are applied to the logo only and are never
// altered by the site theme (no filters, opacity or gradients).
export const brands = {
  github: { Icon: FaGithub, color: '#181717', label: 'GitHub' },
  linkedin: { Icon: FaLinkedin, color: '#0A66C2', label: 'LinkedIn' },
  facebook: { Icon: FaFacebook, color: '#1877F2', label: 'Facebook' },
  java: { Icon: FaJava, color: '#ED8B00', label: 'Java' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
  python: { Icon: SiPython, color: '#3776AB', label: 'Python' },
  c: { Icon: SiC, color: '#A8B9CC', label: 'C' },
  cpp: { Icon: SiCplusplus, color: '#00599C', label: 'C++' },
  react: { Icon: SiReact, color: '#61DAFB', label: 'React' },
  html: { Icon: FaHtml5, color: '#E34F26', label: 'HTML5' },
  css: { Icon: FaCss3, color: '#1572B6', label: 'CSS3' },
  mysql: { Icon: SiMysql, color: '#4479A1', label: 'MySQL' },
  mongodb: { Icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
  redux: { Icon: SiRedux, color: '#764ABC', label: 'Redux' },
  tailwind: { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind CSS' },
  router: { Icon: SiReactrouter, color: '#CA4245', label: 'React Router' },
  axios: { Icon: SiAxios, color: '#5A29E4', label: 'Axios' },
  git: { Icon: SiGit, color: '#F05032', label: 'Git' },
  vite: { Icon: SiVite, color: '#646CFF', label: 'Vite' },
  vscode: { Icon: VscVscode, color: '#007ACC', label: 'VS Code' },
};

export default function BrandLogo({ name, size = 18 }) {
  const brand = brands[name];
  if (!brand) return null;
  const { Icon, color } = brand;
  return <Icon className="brand-logo" size={size} color={color} aria-hidden="true" focusable="false" />;
}