// import in productList, for rendering
import React from 'react'
import "./develop.css";

// passing in props from designdata
const Design = ({img, link}) => {
  return (
    // cards for each design
    <div className='dv'>
        <div className="dv-browser">
            <div className="dv-circle"></div>
            <div className="dv-circle"></div>
            <div className="dv-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="UI/UX Design" className="dv-img" />
        </a>
    </div> 
  )
}

export default Design