import { useState } from 'react';
import { LuDownload } from 'react-icons/lu';
import Button from './Button.jsx';
import useResumeStatus from '../hooks/useResumeStatus.js';
import { profile } from '../data/profile.js';

// Downloads the resume when public/resume.pdf exists. Otherwise it explains
// what to do instead of pretending a download happened.
export default function CvButton({ variant = 'outline', size, label = 'Download CV' }) {
  const status = useResumeStatus(profile.resume.path);
  const [showNote, setShowNote] = useState(false);
  const icon = <LuDownload size={16} aria-hidden="true" />;

  if (status !== 'missing') {
    return (
      <Button href={profile.resume.path} download={profile.resume.downloadName} variant={variant} size={size} icon={icon}>
        {label}
      </Button>
    );
  }

  return (
    <span className="cv-wrap">
      <Button variant={variant} size={size} icon={icon} aria-expanded={showNote} onClick={() => setShowNote((v) => !v)}>
        {label}
      </Button>
      {showNote && (
        <span className="cv-note" role="status">
          The resume is not added yet. Place your PDF at public/resume.pdf.
        </span>
      )}
    </span>
  );
}
