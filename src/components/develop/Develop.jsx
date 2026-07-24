// import in productList, for rendering
import React from 'react'
import "./develop.css";

// passing in props from designdata
const Develop = ({ title, img, link, repo, description, featured, onViewCaseStudy }) => {
  return (
    <div className={`dev-item${featured ? " dev-item-featured" : ""}`}>
      {/* cards for each project */}
      <div className="d">
          <div className="d-img-wrap">
            <img src={img} alt={title} className="d-img" />
          </div>

          <div className="d-body">
            <h3 className="d-title">{title}</h3>
            {description && <p className="d-desc">{description}</p>}

            <div className="d-cta">
              <a href={repo} className="d-btn" target="_blank" rel="noreferrer">Github</a>
              {featured ? (
                <button type="button" className="d-btn-primary" onClick={onViewCaseStudy}>
                  Case Study
                </button>
              ) : (
                <a href={link} className="d-btn-primary" target="_blank" rel="noreferrer">Demo</a>
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Develop
