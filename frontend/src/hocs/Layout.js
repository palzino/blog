import React from "react";
import Navbar from '../components/Navbar';
import '../default.css'

const layout = (props) => (
    
    <div id="app" className="d-flex flex-column min-vh-100">
        <Navbar />
        {props.children}
    </div>
)
export default layout;