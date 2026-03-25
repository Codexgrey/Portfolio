// import in App to render
import React from 'react'
import "./contact.css";
import Git from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Address from "../../img/placeholder.png";
import CV from "../../img/CV.pdf"
import { useContext, useRef, useState } from "react";

// email server provider
import emailjs from "@emailjs/browser"; 
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // to handle data submission
  const handleSubmit = (e) => {
    // to prevent page refresh
    e.preventDefault();

    // using emaijjs server provider: service ID, template ID, - , user ID
    emailjs
      .sendForm("service_tgq7ueb", "template_z1ungnj", formRef.current, "user_OGmoEjgJ7GJmAB9MjFi2W")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true); // show toast
          e.target.reset(); // reset form

          // hide toast after 10s
          setTimeout(() => {
            setDone(false);
          }, 7000);
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">See you around 🥂</h1>
          <div className="c-info">
            <a 
              href="http://github.com/Codexgrey" 
              target="_blank" 
              rel="noreferrer" 
              className="c-info-item"
            >
              <img src={Git} alt="Github Account" className="c-icon" />
              Github
            </a>
            
            <a 
              href="http://www.linkedin.com/in/collinsovuakporaye" 
              target="_blank" 
              rel="noreferrer"
              className="c-info-item"
            >
              <img src={LinkedIn} alt="LinkedIn Account" className="c-icon" />
              LinkedIn
            </a> 

            <div className="c-info-item">
               <img src={Address} alt="Address" className="c-icon" />
                Nicosia, Cyprus.
            </div>
          </div>
        </div>

        <div className="c-right">
          {/* using ref hook to take inputs */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <p className="c-desc">
              <b>Shoot me a mail 📥</b>
            </p>
            
            {/* if darkMode, bgc - #333 */}
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#fff"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#fff"}} rows="5" placeholder="Message" name="message" />
            
            <div className="c-actions">
              <button type="submit">Submit</button>
              <a id="cv" href={CV} download>Download CV</a>
            </div>
            {done && <p className="c-success">Thank you for your message... 🥂</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact