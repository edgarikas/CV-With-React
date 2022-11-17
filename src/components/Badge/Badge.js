import './Badge.css';

function Badge({ className, children }) {
  if (className) {
    className = [className, `badge-${className}`].join(' ');
  } else className = 'badge-blue';

  console.log(className);

  return <p className={className}>{children}</p>;
}

export default Badge;
