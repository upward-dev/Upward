import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { experienceService } from '../services/experiences'

type InputValues = {
  title: string
  accomplishments: string
  location: string
  experienceType: string
  from: Date
  to: Date
}
const schema = yup.object().shape({
  title: yup.string().required('Experience title is required'),
  accomplishments: yup
    .string()
    .required('Please describe what you accomplished'),
  experienceType: yup.string().required('Please select an option'),
  location: yup.string().required('Please enter a location'),
  from: yup
    .date()
    .required('Start date is required')
    .typeError('Date is required'),
  to: yup
    .date()
    .required('End date is required')
    .min(yup.ref('from'), 'End Date cannot be before start date')
    .typeError('Date is required')
})
interface ExperienceProps {
  isHidden: boolean
  isSubmitted: boolean
}
export const Experience = ({ isHidden, isSubmitted }: ExperienceProps) => {
  // TODO - get profile and profile id info from user
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<InputValues>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<InputValues> = ({
    title,
    accomplishments,
    experienceType,
    from,
    to
  }) => {
    const experienceData = {
      userTitle: title,
      accomplishments,
      location,
      from,
      to,
      type: experienceType
    }
    return createExperience(experienceData)
  }

  function createExperience(data) {
    console.log(data)
    return experienceService
      .create(data)
      .then(() => console.log('project added to db'))
      .catch((err) => console.log(err))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        isHidden ? 'visually-hidden' : ''
      } d-md-flex flex-column w-100 justify-content-center align-items-center mt-5`}>
      <div className="col-md-7 col-lg-8">
        <h4>Add an Experience</h4>
        <label htmlFor="title" className="form-label">
          Enter your Experience Name
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
          className={`form-control ${
            errors.title?.message && 'border border-danger'
          }`}></input>
        <p className="mt-1 text-danger">{errors.title?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="accomplishments" className="form-label">
          Describe some of your accomplishments
        </label>
        <textarea
          id="accomplishments"
          {...register('accomplishments', { required: true })}
          className={`form-control ${
            errors.accomplishments?.message && 'border border-danger'
          }`}
          aria-label="With textarea"></textarea>
        <p className="mt-1 text-danger">{errors.accomplishments?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="location" className="form-label">
          Enter your location
        </label>
        <input
          id="location"
          {...register('location', { required: true })}
          className={`form-control ${
            errors.location?.message && 'border border-danger'
          }`}
          aria-label="With textarea"></input>
        <p className="mt-1 text-danger">{errors.location?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="experienceType" className="form-label">
          Select a job/experience type
        </label>
        <select
          id="experienceType"
          {...register('experienceType')}
          className="form-select">
          <option value="contract">Contract</option>
          <option value="full time">Full Time</option>
          <option value="part time">Part Time</option>
        </select>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="from" className="form-label">
          Enter your Start Date
        </label>
        <input
          type="date"
          id="from"
          {...register('from', { valueAsDate: true, required: true })}
          className={`form-control ${
            errors.from?.message && 'border border-danger'
          }`}></input>
        <p className="mt-1 text-danger">{errors.from?.message}</p>
      </div>
      <div className="col-md-7 col-lg-8">
        <label htmlFor="to" className="form-label">
          Enter your End Date
        </label>
        <input
          type="date"
          id="to"
          {...register('to', { valueAsDate: true, required: true })}
          className={`form-control ${
            errors.to?.message && 'border border-danger'
          }`}></input>
        <p className="mt-1 text-danger">{errors.to?.message}</p>
      </div>
      <button
        type="submit"
        className="btn btn-outline-secondary col-md-7 col-lg-8 text-dark m-2 ">
        Submit
      </button>
    </form>
  )
}
