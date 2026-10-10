// Builds mailto: and Gmail compose URLs with safely encoded parameters.
// RFC 6068: line breaks in a mailto body must be CRLF, and spaces must be %20.
const enc = (value) => encodeURIComponent(value.replace(/\r?\n/g, '\r\n'));

export function buildMailto({ to, subject, body }) {
  const params = [];
  if (subject) params.push(`subject=${enc(subject)}`);
  if (body) params.push(`body=${enc(body)}`);
  return `mailto:${to.trim()}${params.length ? `?${params.join('&')}` : ''}`;
}

export function buildGmailCompose({ to, subject, body }) {
  const q = [`view=cm`, `fs=1`, `to=${encodeURIComponent(to.trim())}`];
  if (subject) q.push(`su=${encodeURIComponent(subject)}`);
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `https://mail.google.com/mail/?${q.join('&')}`;
}
