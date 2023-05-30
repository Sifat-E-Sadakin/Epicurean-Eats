import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCommentAlt, FaCalendar } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                     
                        <div className='flex items-center gap-3'><FaHome></FaHome>User Home</div>
                        <div className='flex items-center gap-3'><FaCalendar></FaCalendar>Reservation</div>
                        <div className='flex items-center gap-3'><FaWallet></FaWallet>Payment History</div>
                        <NavLink to={'myCart'}><div className='flex items-center gap-3'><FaShoppingCart></FaShoppingCart>My Cart</div></NavLink>
                        <div className='flex items-center gap-3'><FaCommentAlt></FaCommentAlt>Add Review</div>
                        <div className='flex items-center gap-3'><FaCalendarAlt></FaCalendarAlt>My Booking</div>

                        <div className="divider"></div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;