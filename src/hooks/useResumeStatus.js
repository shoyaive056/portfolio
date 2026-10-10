import { useEffect, useState } from 'react';

let cached; // one request shared by every CV button

function checkResume(url) {
  if (!cached) {
    cached = fetch(url, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        return res.ok && (type.includes('pdf') || type.includes('octet-stream'));
      })
      .catch(() => true); // if the check itself fails, let the browser try the download
  }
  return cached;
}

// 'checking' | 'available' | 'missing'
export default function useResumeStatus(url) {
  const [status, setStatus] = useState('checking');
  useEffect(() => {
    let alive = true;
    checkResume(url).then((ok) => alive && setStatus(ok ? 'available' : 'missing'));
    return () => {
      alive = false;
    };
  }, [url]);
  return status;
}
