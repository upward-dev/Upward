import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {projectService} from '../services/projects';

type InputValues = {
  title:string;
  description:string;
  url:string;
  from: Date;
  to: Date;
};
const schema = yup.object().shape({
  title: yup.string().required("Project title is required"),
  description: yup.string().required("Project description is required"),
  url: yup.string().url().notRequired(),
  from: yup
    .date()
    .required("Start date is required")
    .max(new Date(), 'Only add projects you have completed')
    .typeError("Start date is required")
  ,
  to: yup
    .date()
    .required("End date is required")
    .min(
      yup.ref('from'),
      'End Date cannot be before start date'
      )
    .max(
      new Date(), 'Only add projects you have completed'
    )
    .typeError("End date is required")
    
})
interface ProjectProps{
  isHidden: boolean;
  isSubmitted: boolean;
}
export const Project = ({isHidden,isSubmitted}:ProjectProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputValues>({
    resolver: yupResolver(schema)
  });
  
  const onSubmit: SubmitHandler<InputValues> = data => {
    return createProject(data);
  };

  function createProject(data) {
    return projectService.create(data)
      .then(() => console.log("project added to db"))
      .catch(err => console.log(err));
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${isHidden ? 'visually-hidden' : ''} d-md-flex flex-column w-100 justify-content-center align-items-center mt-5`}>
      <div className="col-md-7 col-lg-8">
        <h4>Add a Project</h4>
        <label htmlFor="title" className="form-label">Enter your Project Name</label>
        <input type="text" id="title" {...register("title",{required:true})} className={`form-control ${errors.title?.message && "border border-danger"}`}>
        </input>
        <p className="mt-1 text-danger">{errors.title?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="description" className="form-label">Enter your Project Description</label>
        <textarea id="description" {...register("description",{required:true})} className={`form-control ${errors.description?.message && "border border-danger"}`} aria-label="With textarea"></textarea>
        <p className="mt-1 text-danger">{errors.description?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="url" className="form-label">Enter your project url (starting with http...)</label>
        <input id="url" type="text"{...register("url")} className="form-control"></input>
        <p className="mt-1 text-danger">{errors.url?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="from" className="form-label">Enter your Start Date</label>
        <input type="date" id="from" {...register("from" ,{valueAsDate:true,required:true})} className={`form-control ${errors.from?.message && "border border-danger"}`} ></input>
        <p className="mt-1 text-danger">{errors.from?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="to" className="form-label">Enter your End Date</label>
        <input type="date" id="to" {...register("to",{valueAsDate:true,required:true})} className={`form-control ${errors.to?.message && "border border-danger"}`} ></input>
        <p className="mt-1 text-danger">{errors.to?.message}</p>
      </div>
      <button type="submit" className="btn btn-outline-secondary col-md-7 col-lg-8 text-dark m-2 ">Submit</button>
    </form>
    
  )
}