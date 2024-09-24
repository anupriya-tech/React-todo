import { Link } from 'react-router-dom';
import Home from '../home';
import Aboutus from './Aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/Home">Home</Link>
      <Link to="/Aboutus">About Us</Link>
    </div>
  );
}

export default Header;