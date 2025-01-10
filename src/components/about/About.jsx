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
                I'm a dabbler of sorts, a tech-vagrant if you like.
            </p>

            <div className="a-desc">
                <p>
                    I wear many hats - designer, developer, engineer etc...
                    The common theme in these facades, is hunger...
                    To upskill, To grow, be really good at what i do!
                    <br />
                    <br />
                    At the core of my intellectual design is <b>Kaizen</b>, 
                    Japanese for <b>Continuous Improvement</b>.
                    <br />
                    <br />
                    Get in touch. 
                    There's work to be done.
                </p>
                <div className="a-award">
                    <img src={Goal} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Aspiration</h4>
                        <p className="a-award-desc">
                            I seek specialization and i'm currently traversing <br /> 
                            the ecosystem in search of my niche.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About