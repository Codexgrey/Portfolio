// import in productList, for rendering
import React from 'react'
import "./develop.css";

// passing in props from designdata
const Develop = ({ title, img, link, repo}) => {
  return (
    // cards for each design
    <div className="d">
        <div className="d-browser">
            <div className="d-circle"></div>
            <div className="d-circle"></div>
            <div className="d-circle"></div>
        </div>

        <div className="container">
          <img src={img} alt={title} className="d-img" />
        </div>

        <div className="d-cta">
          <a href={repo} className="d-btn" target="_blank" rel="noreferrer">Github</a>
          <a href={link} className="d-btn-primary" target="_blank" rel="noreferrer">Demo</a>
        </div>

    </div>  
  )
}

export default Develop