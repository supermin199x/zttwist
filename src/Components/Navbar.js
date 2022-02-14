import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {

    const activeColor = () => {
        var x = document.getElementById('dash');
        x.style.color = "tomato";
    }

    return (
        <div className={'navbar'}>
            <ul className={'nav-item-left'}>
                <li><Link onClick={activeColor} id="dash" to={'/dashboard'} className={'dash-links'}>Dashboard</Link></li>
                <li><Link to={'/report'} className={'report-links'}>Report</Link></li>
                <li><Link to={'/chart'} className={'chart-links'}>Chart</Link></li>
            </ul>
            <ul className={'nav-item-right'}>
                <li><Link className={'logout-link'} to={'/'}>Log Out</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;