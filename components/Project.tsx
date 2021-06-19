import React, {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {projectService} from '../services/projects';
import { NextApiRequest, NextApiResponse } from 'next'
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
  initialData: InputValues;
  id?: number;
  isHidden: boolean;
  createProject?: (data:object) => Promise<void>;
  updateProject?: (data:object) => Promise<void>;
  getProject?: (id:number) => Promise<void>; // fix this type so it accepts a returned value (the project itself) or void
}
const initialValues:InputValues = {
  title: "",
  description: "",
  url: "",
  from: new Date('2021-01-01'),
  to: new Date('2021-01-05')
}
export const Project = ({initialData,id,updateProject,getProject,isHidden,createProject}:ProjectProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InputValues>({
    resolver: yupResolver(schema),
    defaultValues:initialData? initialData : initialValues // if editing, pass in data, otherwise use default
  });
  const [isSubmitted,setIsSubmitted] = useState<boolean>(false);
  
  const onSubmit: SubmitHandler<InputValues> = data => {
    setIsSubmitted(true);
    return id? updateProject(data) : createProject(data);
  };
  
  return (
    <>
    {!isSubmitted ? <form onSubmit={handleSubmit(onSubmit)} className={`${isHidden ? 'visually-hidden' : ''} d-md-flex flex-column w-100 justify-content-center align-items-center mt-4 overflow-auto`}>
      <div className="col-md-7 col-md-11 input-group px-4 mb-3">
        <label htmlFor="title" className="input-group-text">Enter your Project Name</label>
        <input type="text" id="title" {...register("title",{required:true})} className={`form-control ${errors.title?.message && "border border-danger"}`}>
        </input>
        <p className="mt-1 text-danger">{errors.title?.message}</p>
      </div>
      <div className="col-md-7 col-md-11 input-group px-4 mb-3">
        <label htmlFor="description" className="input-group-text">Enter your Project Description</label>
        <textarea id="description" {...register("description",{required:true})} className={`form-control ${errors.description?.message && "border border-danger"}`} aria-label="With textarea"></textarea>
        <p className="mt-1 text-danger">{errors.description?.message}</p>
      </div>
      
      <div className="col-md-7 col-md-11 input-group px-4 mb-3">
        <label htmlFor="url" className="input-group-text">Enter your full project URL</label>
        <input id="url" type="text"{...register("url")} className="form-control"></input>
        <p className="mt-1 text-danger">{errors.url?.message}</p>
      </div>
      <div className="col-md-7 col-md-11 input-group px-4 mb-3">
        <label htmlFor="from" className="input-group-text">Enter your Start Date</label>
        <input type="date" id="from" {...register("from" ,{valueAsDate:true,required:true})} className={`form-control ${errors.from?.message && "border border-danger"}`} ></input>
        <p className="mt-1 text-danger">{errors.from?.message}</p>
      </div>
      <div className="col-md-7 col-md-11 input-group px-4 mb-3">
        <label htmlFor="to" className="input-group-text">Enter your End Date</label>
        <input type="date" id="to" {...register("to",{valueAsDate:true,required:true})} className={`form-control ${errors.to?.message && "border border-danger"}`} ></input>
        <p className="mt-1 text-danger">{errors.to?.message}</p>
      </div>
      <div className="w-100 d-flex flex-row align-items-center justify-content-center">
        <button type="submit" className="btn btn-outline-secondary w-25 text-dark m-2">Add Project</button>
        <button type="reset" className="btn btn-outline-secondary w-25 text-dark m-2" onClick={(e) => { 
          reset(initialValues,{
            keepErrors: false, 
            keepDirty: true,
            keepIsSubmitted: true,
            keepTouched: true,
            keepIsValid: true,
            keepSubmitCount: true}
          );
          }}>Clear</button>
      </div>
      
    </form> : <div className="container col-md-7 col-md-11 d-flex justify-content-center align-items-center">
      <p className="m-3">Your project has been added to your online resume.</p>
      <button onClick={(e) => setIsSubmitted(!isSubmitted) }className="btn btn-outline-secondary text-dark">
        Add Another Project
      </button>
    </div>}
    </>
  )
}