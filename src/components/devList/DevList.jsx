import React from 'react'
import Develop from '../develop/Develop'
import "./devList.css"
import {devworks} from '../../devdata'

const DevList = () => {
  return (
    <div className="dv">
        <div className="dv-texts">
            <h1 className="dv-title">Development</h1>
            <p className="dv-desc">
                Dev Playground <br />
                A few test runs... <b>Enjoy!</b>
            </p>
        </div>

        <div className="dv-list">
          {devworks.map(work => (
            // mapping through each design and rendering its props
            <Develop key={work.id} title={work.title} img={work.img} link={work.link} repo={work.repo}/>
          ))}
        </div>
    </div>
  )
}

export default DevList