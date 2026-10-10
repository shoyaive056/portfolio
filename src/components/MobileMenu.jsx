import { navigation } from '../data/navigation.js';
import Button from './Button.jsx';
import CvButton from './CvButton.jsx';

export default function MobileMenu({ open, activeId, onNavigate }) {
  return (
    <div id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
      <ul>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mobile-menu__actions">
        <CvButton />
        <Button href="#contact" variant="champagne" onClick={onNavigate}>Hire Me</Button>
      </div>
    </div>
  );
}
