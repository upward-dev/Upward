import React from 'react'
import { ProjectResume } from './ProjectResume/ProjectResume'
import './Resume.module.scss'
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
    <div>
      <h1>Build Your Online Resume:</h1>
      <ProjectResume userId={userId} />
      <ExperienceResume />
    </div>
  )
}

export default Resume
