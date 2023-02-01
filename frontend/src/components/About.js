import React from "react";
import { Link } from "react-router-dom";


const About = () => (
    <div className="container">
        <div className="mt-4 p-5 bg-primary text-white rounded text-center">
            <h1>Here you can learn abit about me, my background and my skills</h1>
        </div>
        <div id="form-internal-container" className="container-sm text-white mt-5 text-center">
            <p>As a gamer from a young age it felt natural for me to tinker and explore the systems I was using. <br></br>
            I spent a lot of time playing games but also wanted to play with friends, it was minecraft that helped me get into servers.</p>
            
            <p>I was around 13 when with the help of a friend got a server up and running for us to play on, but that is when I learned about port forwarding <br></br>
            from then on it lead me further down a rabbit hole of optimizing my pc, securing my network and alternative methods to hosting. <br></br>
            This truely was a turning point where I discovered there was a huge world of interesting systems outside of games.</p>
            <p>I studied computer science at GCSE and at college did a Level 3 in IT which covered mainly networking, infrastrucure and systems design.
                <br></br>
                While I was in college I got a job working as agency in nursing and this was another turning point for me as nursing had a profound impact on me.
                <br></br>
                It taught me how to work in a team and when to take the initiative as other people depended on it. Working to deadlines under pressure while remaining calm was a big skill.
                <br></br>
                But most of all it reinforced compassion and understanding, to work well in nursing environments you cannot work like a machine and you realise everyone is an individual with different needs.
            </p>
            <br></br>

            <p>Thank you for reading and I hope you enjoyed reading a bit about me :) </p>
        </div>
    </div>
);

export default About;