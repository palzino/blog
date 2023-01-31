import React from "react";
import { Link } from "react-router-dom";


const Homelab = () => (
    <div className="container">
        <div className="mt-4 p-5 bg-primary text-white rounded text-center">
            <h1>Welcome to my HomeLab</h1>
            <p>Here you can see the physcial and virtual environments I run and the services deployed</p>
        </div>

        <div>
            <div id="form-internal-container" class="mt-3 container text-white ">
                <div class="row">
                        <div className="col-sm border">
                            <h2 className="border-bottom">What is a homelab?</h2>
                            A homelab is a miniturised environment where you can build and test hardware, software and most importantly learn.<br></br>
                            A lab often will run software that your home needs such as network storage, home automation, media server, router, ad blocking and much more.<br></br>
                            A homelab can consist of a single raspberry pi or an old desktop repurposed or can be a large scale multi server setup, there is no right or wrong way as everybodies needs are different.
                        </div>
                        <div className="col-sm border">
                            <h2 className="border-bottom">How did I get into homelab?</h2>
                            I have always had an interest in high performance compute and clusters, something about seeing big numbers makes me happy. <br></br>
                            I had a large amount of media content I wanted to share with my family, backup my PC and share content between my laptop and desktop. I've been dabbling with linux and virtual 
                            machies for many years but never had dedicated apparatus, instead using my desktop as a NAS.<br></br><br></br>
                            When I started my business I also had a need to backup all business information and learn technologies such as docker and become comfortable with deploying various services. 
                            This lead be back to proxmox which I had orginally planned to build my desktop with and virtualise my gaming pc but ultimatly never did due to platform limitations.<br></br>
                        </div>
                        
                </div>

            </div>
        </div>
        <div>
            <div id="form-internal-container" className="mt-3 container text-white ">
                <h2 className="col-sm text-center">My homelab</h2><br></br>
                <div className="row">
                    <div className="col-sm text-center">
                        My homelab
                    </div>
                    <div className="col-sm text-center">
                        Services run
                    </div>
                </div>
            
                            
                        
                
            </div>


        </div>
    </div>
);

export default Homelab;