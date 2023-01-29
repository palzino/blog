import React from "react";
import { NavLink, Link } from "react-router-dom";


const category = () => (
    <div className="container mt-3">
        <h3 className="display-4">/category/ Category</h3>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex">
                <Link className="p-2 link-secondary" to="/category/homelab">Homelab</Link>
                <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                <Link className="p-2 link-secondary" to="/category/work">Work</Link>
                <Link className="p-2 link-secondary" to="/category/projects">Projects</Link>
                <Link className="p-2 link-secondary" to="/category/coding">Coding</Link>
                <Link className="p-2 link-secondary" to="/category/blockchain">Blockchain</Link>
                <Link className="p-2 link-secondary" to="/category/other">Other</Link>
            </nav>
        </div>
    </div>
);

export default category;