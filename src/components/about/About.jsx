// init comp and import in app.jsx for rendering
import React from 'react'
import "./about.css";
import greenme from "../../img/me.png"

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
                    Describing myself is a bit tricky; I have a habit of under-selling me, or so i've been told. 
                    I am many things; a designer, developer, engineer, scientist etc...
                    The common theme in all these facades is my burning desire to up-skill, to grow...become a <b>MAESTRO!</b>
                </p>
                <br />
                <p> 
                    <em>I seek specialization in a domain of technology and i'm currently traversing the ecosystem in search of my <b>niche</b>.</em>
                </p> 
                <br />
                <p>
                    My motto <b>Kaizen</b>, is Japanese for <b>Continuous Improvement</b>. 
                    This is aptly matched by my ability to learn and an appetite for technology. 
                    I'm skilled in UI/UX design & principles. Proficient in Javascript, React as well as Python,
                    (Django) as it relates to Backend Development & Data Science.
                </p>
                <br />
                My name you already know, what you don't know is i've been chasing my dreams with technology since December 2018, 
                the rest you'll find out if you're <b>lucky</b> enough to work with me.
            </div>
        </div>
    </div>
  )
}

export default About