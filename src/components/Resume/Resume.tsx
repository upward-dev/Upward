import React from 'react'
import { ProjectResume } from './ProjectResume/ProjectResume'
import './Resume.module.scss'
import AboutResume from './AboutResume/AboutResume'
import { ExperienceResume } from './ExperienceResume/ExperienceResume'

interface ResumeProps {
  userId: string
  /*
  add other props here
  */
}

//TODO: onSubmit whole Resume

const Resume = ({ userId }: ResumeProps) => {
  return (
    <div className="page-margin-top px-4">
      <h1>Build Your Online Resume:</h1>
      <AboutResume />
      <ProjectResume userId={userId} />
      <ExperienceResume />
    </div>
  )
}

export default Resume