import { skillGroups } from '../data/skills.js';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillGroup from '../components/SkillGroup.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Skills"
          intro="The tools I use to build, grouped by how I work with them. Data Science, Machine Learning, and AI are areas I am actively learning."
        />
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
