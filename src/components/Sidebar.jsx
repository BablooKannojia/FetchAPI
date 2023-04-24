import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaHome,
    FaStar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BgTrans from './../image/bg.jpg';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaHome/>
        },
        {
            path:"/tables",
            name:"Tables",
            icon:<FaUserAlt/>
        },
       
        {
            path:"/billing",
            name:"Billing",
            icon:<FaCommentAlt/>
        },
        {
            path:"/rtl",
            name:"RTL",
            icon:<FaShoppingBag/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaThList/>
        },
        {
            path:"/signin",
            name:"Sign In",
            icon:<FaThList/>
        },
        {
            path:"/signup",
            name:"Sign Up",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container-xxl ms-0 p-0 d-flex">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <div className='card-main mt-5'>
                    <div class="card side">
                        <div class="card-body pt-0 text-white">
                            <p className='star'><FaStar /></p>
                            <h5 class="card-title">Need help?</h5>
                            <p class="card-text">please check our docs</p>
                            <a href="#" class="btn btn-document">DOCUMENTATION</a>
                        </div>
                    </div>
               </div>
               <a href="#" class="btn btn-upgrade">Upgrade to PRO</a>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;