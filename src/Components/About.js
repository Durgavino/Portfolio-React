import React from "react";
import images from '../images/Aboutme.jpg';
//import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
        <div className="aboutdiv">
       
            <img class="myimage" src={images} alt="My Pic"  />
        
            <p className="aboutdes">I am a new Coding Developer and an experienced Customer Service Professional</p>
            </div>
        </>


    )
}
export default About