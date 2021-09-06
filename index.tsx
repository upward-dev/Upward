import React, { useState } from 'react'

import { Project } from './components/Project'
import { projectService } from './services/projects'
interface ProjectI {
  title: string
  description: string
  url: string
  from: Date
  to: Date
}

function OnlineResume() {
  const [showProject, setShowProject] = useState<boolean>(false)
  const [showExperience, setShowExperience] = useState<boolean>(false)
  const createProject = (data: ProjectI) => {
    data = Object.assign(data, { ...data, CREATE_PROJECT: true })
    return projectService
      .create(data)
      .then(() => console.log('project added to db'))
      .catch((err) => console.log(err))
  }
  return (
    <div className=" d-flex flex-column min-vh-100 w-100 justify-content-center align-items-center">
      <section className="d-flex flex-column w-sm-100 w-50 justify-content-start align-items-center">
        <h2>Create Your Profile</h2>
        <p>Profile section would go here....</p>
        <div
          className="w-100"
          id="accordion"
          role="tablist"
          aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="headingOne">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  onClick={() => setShowProject(!showProject)}
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Add Projects
                </a>
              </h5>
            </div>
            <div
              id="collapseOne"
              className={`collapse ${showProject && 'show'}`}
              role="tabpanel"
              aria-labelledby="headingOne">
              <div className="card-block">
                <Project isHidden={false} createProject={createProject} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="headingTwo">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  onClick={() => setShowExperience(!showExperience)}
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  Add Experiences
                </a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${showExperience && 'show'}`}
              role="tabpanel"
              aria-labelledby="headingTwo">
              <div className="card-block m-2">
                EXPERIENCE COMPONENT GOES HERE
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineResume
