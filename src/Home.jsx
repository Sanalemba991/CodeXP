
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>For Login</p>
      
      <div>
        <Link to="/login">Login</Link>
        <span> | </span>
        <Link to="/Register">Register</Link>
      </div>
    </div>
  );
}

export default Home;
