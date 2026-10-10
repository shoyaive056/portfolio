export default function ContactItem({ icon, label, value, href, external }) {
  return (
    <li>
      <a
        className="contact-item"
        href={href}
        aria-label={`${label}: ${value}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className="contact-item__icon">{icon}</span>
        <span className="contact-item__text">
          <span className="contact-item__label">{label}</span>
          <span className="contact-item__value">{value}</span>
        </span>
      </a>
    </li>
  );
}
