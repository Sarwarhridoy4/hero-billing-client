import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Auth/AuthContext';

const Header = () => {
  
  
  const {total} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link to='/' className="btn btn-ghost text-xl uppercase">Hero Billing</Link>
  </div>
  
        <div className="navbar-end">
          <form className='form-control flex-1 mr-4'>
          <input
          type='text'
              placeholder='Search'
              name='search'
          className='input input-bordered'
          />
        </form>
    <p>Paid Total:{total}</p>
  </div>
</div>
    );
};

export default Header;