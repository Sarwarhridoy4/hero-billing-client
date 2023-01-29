import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link to='/' className="btn btn-ghost text-xl uppercase">Hero Billing</Link>
  </div>
  
  <div className="navbar-end">
    <p>Paid Total: 0</p>
  </div>
</div>
    );
};

export default Header;