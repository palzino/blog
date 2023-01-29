import React from "react";
import { Link } from "react-router-dom";


const Homelab = () => (
    <div className="container">
        <div className="mt-4 p-5 bg-primary text-white rounded text-center">
            <h1>Welcome to my HomeLab</h1>
            <p>Here you can see the physcial and virtual environments I run and the services deployed</p>
        </div>

        <div>
            <div class="container">
                <div class="row">
                        <div class="col-sm">
                            What is a homelab?
                        </div>
                        <div class="col-sm">
                            How did I get into homelab?
                        </div>
                        <div class="col-sm">
                            What runs on my homelab?
                        </div>
                </div>
            </div>
        </div>
        
    </div>
);

export default Homelab;