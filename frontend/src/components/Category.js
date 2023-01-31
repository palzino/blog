import React from "react";
import { NavLink, Link } from "react-router-dom";


const category = () => (
    <div>
         
        <div className="nav-scroller py-1 bg-light">
                    <nav className="navbar d-flex bg-body-secondary">
                        <Link className="p-2 link-secondary" to="/category/homelab">Homelab</Link>
                        <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                        <Link className="p-2 link-secondary" to="/category/work">Work</Link>
                        <Link className="p-2 link-secondary" to="/category/projects">Projects</Link>
                        <Link className="p-2 link-secondary" to="/category/coding">Coding</Link>
                        <Link className="p-2 link-secondary" to="/category/blockchain">Blockchain</Link>
                        <Link className="p-2 link-secondary" to="/category/other">Other</Link>
                    </nav>
            </div>
            <h3 className="display-4">Hello</h3>

   
    </div>
);

export default category;