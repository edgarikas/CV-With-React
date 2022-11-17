import './Headings2.css';

function Headings2({ children }) {
  return (
    <div>
      <h2>{children}</h2>
      <div className='hr1'></div>
      <div className='hr'></div>
    </div>
  );
}

export default Headings2;
