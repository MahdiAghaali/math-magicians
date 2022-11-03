import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Math Magician</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">calculator</Link></li>
        <li><Link to="/quotes">quotes</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
