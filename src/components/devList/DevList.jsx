import React, { useState } from 'react'
import Develop from '../develop/Develop'
import "./devList.css"
import { featuredWorks, practiceWorks } from '../../devdata'
import CaseStudyModal from '../caseStudyModal/CaseStudyModal'

const DevList = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="dv">
        <div className="dv-texts">
            <h1 className="dv-title">Development</h1>
            <p className="dv-desc">
              Showcasing a few projects 🔩
            </p>
        </div>

        <h3 className="dv-subtitle">Featured Work</h3>
        <div className="dv-list dv-list-featured">
          {featuredWorks.map(work => (
            <Develop
              key={work.id}
              title={work.title}
              img={work.img}
              link={work.link}
              repo={work.repo}
              description={work.description}
              featured
              onViewCaseStudy={() => setActiveProject(work)}
            />
          ))}
        </div>

        <h3 className="dv-subtitle">Practice Projects</h3>
        <div className="dv-list dv-list-practice">
          {practiceWorks.map(work => (
            <Develop key={work.id} title={work.title} img={work.img} link={work.link} repo={work.repo} description={work.description} />
          ))}
        </div>

        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}

export default DevList
