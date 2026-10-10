import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { navigation } from '../data/navigation.js';
import { profile } from '../data/profile.js';
import useActiveSection from '../hooks/useActiveSection.js';
import Button from './Button.jsx';
import CvButton from './CvButton.jsx';
import MobileMenu from './MobileMenu.jsx';

const sectionIds = navigation.map((item) => item.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="brand" href="#home" onClick={close} aria-label={`${profile.name}, back to top`}>
          <span className="brand__mark">{profile.monogram}</span>
          <span className="brand__name">MH SHOYAIVE</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={activeId === item.id ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <CvButton size="sm" label="Resume" />
          <Button href="#contact" variant="champagne" size="sm">Hire Me</Button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX size={22} aria-hidden="true" /> : <LuMenu size={22} aria-hidden="true" />}
        </button>
      </div>
      <MobileMenu open={open} activeId={activeId} onNavigate={close} />
    </header>
  );
}
