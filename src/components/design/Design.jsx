// import in productList, for rendering
import React from 'react'
import "./design.css";

// passing in props from designdata
const Design = ({img, link}) => {
  return (
    // cards for each design
    <div className="ds">
        <div className="ds-browser">
            <div className="ds-circle"></div>
            <div className="ds-circle"></div>
            <div className="ds-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="UI/UX Design" className="ds-img" />
        </a>
    </div> 
  )
}

export default Design