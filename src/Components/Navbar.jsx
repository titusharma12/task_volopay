import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <style jsx='true'>
                {`
                    .active {
                        color: #6c757d !important;
                        font-weight: bold !important;
                        border-bottom: 3px solid #6c757d !important;
                    }

                    .button {
                        border-radius : 0;
                    }
                `}
            </style>

            <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white sticky-top`}>
                <div className="container-fluid">
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeclassname='active' onClick={handleClick} className={`${styles.navLink} nav-link`} to="/">Your</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} aria-current="page" to="/all">All</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} aria-current="page" to="/blocked">Blocked</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;