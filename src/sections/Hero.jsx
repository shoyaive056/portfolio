import { profile } from '../data/profile.js';
import Button from '../components/Button.jsx';
import CvButton from '../components/CvButton.jsx';
import ProfileImage from '../components/ProfileImage.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero__role">{profile.title}</p>
          <p className="hero__text">{profile.heroText}</p>
          <div className="hero__actions">
            <Button href="#projects" variant="solid">View My Projects</Button>
            <Button href="#contact" variant="champagne">Hire Me</Button>
            <CvButton variant="link" label="Download CV" />
          </div>
          <p className="hero__availability">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>
        <div className="hero__visual">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
