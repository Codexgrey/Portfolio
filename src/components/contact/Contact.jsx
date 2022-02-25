// import in App to render
import React from 'react'
import "./contact.css";
import Phone from "../../img/telephone.png";
import Git from "../../img/github.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.png";
import Address from "../../img/placeholder.png";
import { useRef, useState } from "react";

// email server provider
import emailjs from "@emailjs/browser"; 
// import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  // to handle data submission
  const handleSubmit = (e) => {
    // to prevent page refresh
    e.preventDefault();

    // using emaijjs server provider
    emailjs
      .sendForm("service_tgq7ueb", "template_z1ungnj", formRef.current, "user_OGmoEjgJ7GJmAB9MjFi2W")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project and other possibilities</h1>
          <div className="c-info">
            <div className="c-info-item">
               <img src={Phone} alt="Phone Number" className="c-icon" />
               +234 8071332973
            </div>
            <div className="c-info-item">
               <img src={Email} alt="Mail" className="c-icon" />
               thecodexgrey@gmail.com
            </div>
            <div className="c-info-item">
              <a href="http://github.com/Codexgrey" target="_blank" rel="noreferrer" >
                <img src={Git} alt="Github Account" className="c-icon" />
              </a>
              Github
            </div>
            <div className="c-info-item">
              <a href="http://www.linkedin.com/in/collinsovuakporaye" target="_blank" rel="noreferrer" >
                <img src={LinkedIn} alt="LinkedIn Account" className="c-icon" />
              </a> 
              LinkedIn
            </div>
            <div className="c-info-item">
               <img src={Address} alt="Address" className="c-icon" />
                Lagos, Nigeria
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your challenge?</b> Get in touch. Let's design, 
            build, engineer a suitable solution.
          </p>

          {/* using ref hook to take inputs */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <input /** style={{backgroundColor: darkMode && "#333"}}*/ type="text" placeholder="Name" name="user_name" />
            <input /** style={{backgroundColor: darkMode && "#333"}}*/ type="text" placeholder="Subject" name="user_subject" />
            <input /** style={{backgroundColor: darkMode && "#333"}}*/ type="text" placeholder="Email" name="user_email" />
            <textarea /** style={{backgroundColor: darkMode && "#333"}}*/ rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact