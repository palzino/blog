import React from "react";
import { Link, NavLink } from "react-router-dom";

const navbar = () => (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/' >Palvir's World</Link>
            <button 
                className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/homelab'>HomeLab</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  aria-current="page" to='/showcase'>Showcase</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page"  to='/cv'>CV</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/blog'>Blog</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;