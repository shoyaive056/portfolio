import { navigation } from '../data/navigation.js';
import { profile } from '../data/profile.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__about">
          <p className="footer__name">{profile.name}</p>
          <p>{profile.footerText}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <p className="container footer__copy">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
