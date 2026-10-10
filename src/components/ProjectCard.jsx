import { LuExternalLink } from 'react-icons/lu';
import BrandLogo from './BrandLogo.jsx';
import { publicPath } from '../data/profile.js';
import Button from './Button.jsx';

export default function ProjectCard({ project, index }) {
  const { title, category, description, technologies, thumbnail, liveUrl, repoUrl } = project;
  return (
    <article className="project-card">
      {thumbnail ? (
        <img
          className="project-card__thumb"
          src={publicPath(thumbnail)}
          alt={`Screenshot of ${title}`}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className={`project-card__thumb project-card__thumb--tone${index % 5}`} aria-hidden="true" />
      )}
      <div className="project-card__body">
        <p className="project-card__category">{category}</p>
        <h3>{title}</h3>
        <p className="project-card__text">{description}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {(liveUrl || repoUrl) && (
          <div className="project-card__links">
            {liveUrl && (
              <Button href={liveUrl} external variant="outline" size="sm" icon={<LuExternalLink size={15} aria-hidden="true" />} aria-label={`Live demo of ${title}`}>
                Live Demo
              </Button>
            )}
            {repoUrl && (
              <Button href={repoUrl} external variant="ghost" size="sm" icon={<BrandLogo name="github" size={16} />} aria-label={`GitHub repository for ${title}`}>
                Code
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
