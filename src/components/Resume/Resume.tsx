import React from 'react'
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
    <div className="page-margin-top px-4">
      <h1>Build Your Online Resume:</h1>
      <ExperienceResume />
    </div>
  )
}

export default Resume
