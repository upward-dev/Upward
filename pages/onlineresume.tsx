import React, {useState} from 'react'
import {Experience } from '../components/Experience';
import {Project} from '../components/Project';
import About from '../components/Resume/AboutResume/AboutResume'

function OnlineResume() {
  const [showProject,setShowProject] = useState<boolean>(false);
  const [showExperience,setShowExperience] = useState<boolean>(false);
  const [showAbout,setShowAbout] = useState<boolean>(false);
  
  return (
    <div className="d-flex flex-column min-vh-100 w-100 justify-content-center align-items-center">
      <section className="d-flex flex-column w-100 ml-2 mr-2 mt-2 justify-content-start align-items-center">
        <h2
          className={`${
            (showProject || showExperience) && 'visually-hidden'
          } mt-5`}>
          Create Your Online Resume
        </h2>
        <div className="d-flex flex-row justify-content-around ">
          <button
            onClick={(e) => setShowAbout(!showAbout)}
            className={`${
              (showProject || showExperience ||showAbout) && 'visually-hidden'
            } btn btn-outline-secondary text-dark m-2 `}>
            Tell Us About Yourself
          </button>
          <button
            onClick={(e) => setShowProject(!showProject)}
            className={`${
              (showProject || showExperience) && 'visually-hidden'
            } btn btn-outline-secondary text-dark m-2 `}>
            Add a Project you've Completed
          </button>
          <button
            onClick={(e) => setShowExperience(!showExperience)}
            className={`${
              (showProject || showExperience) && 'visually-hidden'
            } btn btn-outline-secondary text-dark m-2 `}>
            Add a past Experience
          </button>
        </div>
        <About isHidden={!showAbout} isSubmitted={false} />
        <Project isHidden={!showProject} isSubmitted={false} />
        <Experience isHidden={!showExperience} isSubmitted={false} />
      </section>
    </div>
  )
}


export default OnlineResume;

