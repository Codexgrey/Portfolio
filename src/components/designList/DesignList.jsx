// import in App for rendering
import React from 'react'
import Design from '../design/Design'
import "./designList.css"
import {designs} from '../../designdata'

const DesignList = () => {
  return (
    <div className='dl'>
        <div className="dl-texts">
            <h1 className="dl-title">Design</h1>
            <p className="dl-desc">
                This section showcases some of my <br />
                works in User Interface and Experience Design. <br />
                Click on a photo to visit my dribble account. <b>Enjoy!</b>
            </p>
        </div>

        <div className="dl-list">
          {designs.map(design => (
            // mapping through each design and rendering its props
            <Design key={design.id} img={design.img} link={design.link} />
          ))}
        </div>
    </div>
  )
}

export default DesignList