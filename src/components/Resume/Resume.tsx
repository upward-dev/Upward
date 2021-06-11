import React from 'react'
import { ProjectResume } from './ProjectResume/ProjectResume'
import './Resume.module.scss'

interface ResumeProps{
  userId: string;
  /*
  add other props here
  */
}
const Resume = ({userId}:ResumeProps) => {
  return (
    <div>
      <h1>Build Your Online Resume:</h1>
      <ProjectResume userId={userId}/> 
    </div>
  )
}

export default Resume;