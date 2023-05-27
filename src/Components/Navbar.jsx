import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userAuth } from '../Providers/UserProvider';

const Navbar = () => {

    let {logOut}= useContext(userAuth);

    let navItem = <>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/menu`}>Menu</Link></li>
        <li><Link to={`/order/Salad`}>Order</Link></li>
       
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/signUp'}>Sign Up</Link></li>
        <li><button onClick={logOut}>LogOut</button></li>
    </>
    return (
        <div className='container '>
            <div className="navbar fixed z-20  bg-black bg-opacity-50 text-white mx-auto      ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Epicurean Eats</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;