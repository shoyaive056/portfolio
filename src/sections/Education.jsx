import { LuGraduationCap } from 'react-icons/lu';
import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />
        <ul className="education-list">
          {profile.education.map((item) => (
            <li key={item.degree} className="education">
              <LuGraduationCap size={28} aria-hidden="true" />
              <div>
                <h3>{item.degree}</h3>
                <p className="education__school">
                  {item.institution}, {item.location}
                </p>
                {item.focus && <p className="education__focus">Focus: {item.focus}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}