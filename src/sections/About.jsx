import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="section section--tint" aria-labelledby="about-title">
      <div className="container about__grid">
        <div>
          <SectionHeading id="about-title" title="About me" />
          <div className="prose">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <dl className="facts">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="facts__row">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
