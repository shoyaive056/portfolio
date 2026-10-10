import { LuArrowUpRight } from 'react-icons/lu';
import { projects } from '../data/projects.js';
import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Button from '../components/Button.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section section--tint" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="Projects"
          intro="A selection of the kinds of applications I build and explore. Links appear on each card once a live demo or repository is added."
        />
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="projects__more">
          <Button
            href={profile.contact.github}
            external
            variant="outline"
            icon={<LuArrowUpRight size={16} aria-hidden="true" />}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
