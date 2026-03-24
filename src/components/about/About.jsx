// init comp and import in app.jsx to render
import React from 'react'
import "./about.css";
import greenme from "../../img/me.png"
import Goal from "../../img/target.png";

const About = () => {
  return (
    <div className="a">
        {/* card stack */}
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={greenme} alt="" className="a-img" />
            </div>
        </div>

        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I'm a dabbler of sorts, <br /> a tech-vagrant if you like.
            </p>

            <div className="a-desc">
                <p>
                    I've been a - designer, developer, engineer etc. <br />
                    The common theme here is discovery! <br />
                    To upskill, To grow, be really good at what i do!
                    <br />
                    <br />
                    What it boils down to, is a keen interest in exploring
                    the limits of my <b>Potential</b>.
                    <br />
                    <br />
                    Get in touch.<br />
                    Let's build great memories.
                </p>
                <div className="a-asp">
                    <img src={Goal} alt="" className="a-asp-img" />
                    <div className="a-asp-texts">
                        <h4 className="a-asp-title">Aspiration</h4>
                        <p className="a-asp-desc">
                            To find my niche in this vast, continuously <br /> 
                            changing landscape of technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About