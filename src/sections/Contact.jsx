import { LuPhone, LuMail } from 'react-icons/lu';
import { profile } from '../data/profile.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactItem from '../components/ContactItem.jsx';
import EmailAction from '../components/EmailAction.jsx';
import BrandLogo from '../components/BrandLogo.jsx';
import { buildMailto } from '../utils/email.js';

const { contact, emailTemplate } = profile;
const items = [
  { icon: <LuPhone size={20} aria-hidden="true" />, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
  { icon: <LuMail size={20} aria-hidden="true" />, label: 'Email', value: contact.email, href: buildMailto({ to: contact.email, subject: emailTemplate.subject }) },
  { icon: <BrandLogo name="linkedin" size={22} />, label: 'LinkedIn', value: 'Visit LinkedIn profile', href: contact.linkedin, external: true },
  { icon: <BrandLogo name="github" size={22} />, label: 'GitHub', value: 'Visit GitHub profile', href: contact.github, external: true },
  { icon: <BrandLogo name="facebook" size={22} />, label: 'Facebook', value: 'Visit Facebook profile', href: contact.facebook, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--tint contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <SectionHeading
            id="contact-title"
            title="Let's Build Something Meaningful"
            intro="I'm open to suitable internship opportunities, junior developer roles, and projects involving web development, AI integration, and data-driven applications."
          />
          <EmailAction />
        </div>
        <ul className="contact__list">
          {items.map((item) => (
            <ContactItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
