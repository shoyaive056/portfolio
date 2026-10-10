// Renders an <a> when given href, otherwise a <button>.
export default function Button({ href, external, variant = 'solid', size, icon, children, className = '', ...rest }) {
  const classes = `btn btn--${variant}${size ? ` btn--${size}` : ''} ${className}`.trim();
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a className={classes} href={href} {...extra} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
