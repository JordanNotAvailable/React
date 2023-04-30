import { Link } from 'react-router-dom';
import './Landing.css';
// import Loader from 'react-loaders';

const Header = () => {
  return (
    <header style={{position: 'absolute', top: '0', right: '0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '30px', padding: '0 1rem'}}>
      <Link to='/signin'>
        <button style={{fontSize: '15px', padding: '0.3rem', marginRight: '1rem'}}>Sign In</button>
      </Link>
      <Link to='/register'>
        <button style={{fontSize: '15px', padding: '0.3rem'}}>Create Account</button>
      </Link>
    </header>
  );
}




export default Header;

