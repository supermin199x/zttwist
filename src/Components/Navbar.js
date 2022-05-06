import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className={'navbar'}>
            <ul className={'nav-item-left'}>
                <li><Link to={'/dashboard'} className={'dash-links'}>Dashboard</Link></li>
                <li><Link to={'/report'} className={'report-links'}>Report</Link></li>
            </ul>
            <ul className={'nav-item-right'}>
                <li><Link className={'logout-link'} to={'/'}>Log Out</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;