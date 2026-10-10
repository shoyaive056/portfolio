import { useEffect, useRef, useState } from 'react';
import { LuMail, LuCopy, LuExternalLink } from 'react-icons/lu';
import { profile } from '../data/profile.js';
import { buildMailto, buildGmailCompose } from '../utils/email.js';
import Button from './Button.jsx';

const FALLBACK_DELAY = 1500;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers or non-secure pages: try the legacy route.
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }
}

// Opens the visitor's email app with a prefilled message. A website cannot
// know whether a message was sent, so if no email app takes over within a
// moment, it offers honest alternatives instead of a fake success message.
export default function EmailAction({ label = 'Send an Email', variant = 'solid' }) {
  const { email } = profile.contact;
  const message = { to: email, ...profile.emailTemplate };
  const [fallback, setFallback] = useState(false);
  const [copyState, setCopyState] = useState('idle'); // idle | copied | failed
  const timer = useRef(null);

  const cancel = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    // If another app or tab takes focus, the email link worked.
    const onHide = () => document.visibilityState === 'hidden' && cancel();
    window.addEventListener('blur', cancel);
    document.addEventListener('visibilitychange', onHide);
    return () => {
      cancel();
      window.removeEventListener('blur', cancel);
      document.removeEventListener('visibilitychange', onHide);
    };
  }, []);

  const handleClick = () => {
    setFallback(false);
    setCopyState('idle');
    cancel();
    timer.current = setTimeout(() => setFallback(true), FALLBACK_DELAY);
  };

  const handleCopy = async () => setCopyState((await copyText(email)) ? 'copied' : 'failed');

  return (
    <div className="email-action">
      <Button
        href={buildMailto(message)}
        variant={variant}
        icon={<LuMail size={17} aria-hidden="true" />}
        onClick={handleClick}
      >
        {label}
      </Button>

      {fallback && (
        <div className="email-fallback" role="status">
          <p>
            Your email app did not open. You can copy the address or write the message in Gmail.
          </p>
          <p className="email-fallback__address">{email}</p>
          <div className="email-fallback__actions">
            <Button variant="outline" size="sm" icon={<LuCopy size={15} aria-hidden="true" />} onClick={handleCopy}>
              Copy address
            </Button>
            <Button
              href={buildGmailCompose(message)}
              external
              variant="outline"
              size="sm"
              icon={<LuExternalLink size={15} aria-hidden="true" />}
            >
              Write in Gmail
            </Button>
          </div>
          {copyState === 'copied' && <p className="email-fallback__result">Address copied.</p>}
          {copyState === 'failed' && (
            <p className="email-fallback__result">Could not copy automatically. Please select the address above.</p>
          )}
        </div>
      )}
    </div>
  );
}
