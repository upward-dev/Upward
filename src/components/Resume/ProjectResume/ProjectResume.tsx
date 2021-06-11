import React from 'react';
import { useForm } from 'react-hook-form';

import './ProjectResume.module.scss';

//import prisma from '../../lib/prisma'
interface ProjectProps{
  userId: string;
  /* pass in user info AND profile info that created the project?? 
  profileId: number
  */
}
interface ProjectI{
  //type for project to be saved in Prisma db
  projectTitle:string;
  projectDescription:string;
  projectUrl:string;
  projectStart:Date;
  projectEnd:Date;
}

const saveProject = async (project) => {
  /*
  //TODO - move this function to the api route or to the lib file
  const result = await prisma.project.create({
    data: project
  });
  // add ProjectI data type to result
  console.log(result);
  */
}

export const ProjectResume = ({userId}:ProjectProps) => {
    // allows users to add projects to their online resume
  const onSubmit = (e:object) => {
    // make connection to prisma db to save project info 
    console.log(e);

  }
  const validate = (values:object) => {
    return {};
  }
  const {register, handleSubmit } = useForm({
    // onSubmit, 
    // validate
  });
  const projectTitle = register('projectTitle');
  const projectDescription = register('projectDescription');
  const projectUrl = register('projectUrl');
  const projectStart = register('projectStart');
  const projectEnd = register('projectEnd');
  return (
  <div>
    <h1 >Add Your Projects {userId}</h1>
    <form>
      <div>
        <label>Project Title</label>
        <input {...projectTitle} placeholder="Project Title" type="text"/> {
          // projectTitle.meta.touched && projectTitle.meta.error && (
            // <span>{projectTitle.meta.error}</span>
          // )
        }
      </div>
      <div>
        <label>Project Description</label>
        <input {...projectDescription} placeholder="Project Description" type="text"/> {
          // projectDescription.meta.touched && projectDescription.meta.error && (
            // <span>{projectDescription.meta.error}</span>
          // )
        }
      </div>
      <div>
        <label>Project Url</label>
        <input {...projectUrl} placeholder="Project URL" type="text"/> {
          // projectUrl.meta.touched && projectUrl.meta.error && (
            // <span>{projectUrl.meta.error}</span>
          // )
        }
      </div>
      <div>
        <label>Project Start Date</label>
        <input {...projectStart} placeholder="Project Start Date" type="date"/> {
          // projectStart.meta.touched && projectStart.meta.error && (
            // <span>{projectStart.meta.error}</span>
          // )
        }
      </div>
      <div>
        <label>Project End Date</label>
        <input {...projectEnd} placeholder="Project End Date" type="date"/> {
          // projectEnd.meta.touched && projectEnd.meta.error && (
            // <span>{projectEnd.meta.error}</span>
          // )
        }
      </div>
        <button type="submit">Submit</button>
    </form>
  </div>
  );
}
