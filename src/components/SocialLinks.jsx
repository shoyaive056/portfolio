import { LuMail } from 'react-icons/lu';
import { profile } from '../data/profile.js';
import { buildMailto } from '../utils/email.js';
import BrandLogo from './BrandLogo.jsx';

const { contact, emailTemplate } = profile;

export default function SocialLinks() {
  const external = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <ul className="social-links">
      <li>
        <a href={contact.linkedin} aria-label="LinkedIn" {...external}>
          <BrandLogo name="linkedin" size={20} />
        </a>
      </li>
      <li>
        <a href={contact.github} aria-label="GitHub" {...external}>
          <BrandLogo name="github" size={20} />
        </a>
      </li>
      <li>
        <a href={contact.facebook} aria-label="Facebook" {...external}>
          <BrandLogo name="facebook" size={20} />
        </a>
      </li>
      <li>
        <a href={buildMailto({ to: contact.email, subject: emailTemplate.subject })} aria-label="Email">
          <LuMail className="mail-glyph" size={20} aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
