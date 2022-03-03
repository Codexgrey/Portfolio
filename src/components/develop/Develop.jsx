// import in productList, for rendering
import React from 'react'
import "./develop.css";

// passing in props from designdata
const Develop = ({img, link, repo}) => {
  return (
    // cards for each design
    <div className="d">
        <div className="d-browser">
            <div className="d-circle"></div>
            <div className="d-circle"></div>
            <div className="d-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="Web Development" className="d-img" />
        </a>
    </div> 
  )
}

export default Develop