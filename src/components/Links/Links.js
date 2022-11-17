import './Links.css';

function Links({ children, href, className, target }) {
  if (className) {
    className = [`link link-${className}`].join(' ');
  } else className = 'link';

  return (
    <p className={className}>
      <a target={target} href={href}>
        {children}
      </a>
    </p>
  );
}

export default Links;
