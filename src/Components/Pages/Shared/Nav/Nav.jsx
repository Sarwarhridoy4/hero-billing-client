import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-none">
    <Link to ='/' className="btn btn-ghost upper-case text-xl">logo</Link>
            </div>
            <div className="form-control flex-1">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
  <div className="flex-none gap-2">
    
          <div className="dropdown dropdown-end">
          <label htmlFor="my-modal-3" className="btn btn-success uppercase">Add Billings</label>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><button className='btn btn-warning'>Logout</button></li>
              <li><Link to='/registration'>Register</Link></li>
              <li><Link to='/login'>Login</Link></li>
              
      </ul>
    </div>
  </div>
</div>
    );
};

export default Nav;