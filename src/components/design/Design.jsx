// import in productList, for rendering
import React from 'react'
import "./design.css";

// passing in props from designdata
const Design = ({img, link}) => {
  return (
    // cards for each design
    <div className='d'>
        <div className="d-browser">
            <div className="d-circle"></div>
            <div className="d-circle"></div>
            <div className="d-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="UI/UX Design" className="d-img" />
        </a>
    </div> 
  )
}

export default Design