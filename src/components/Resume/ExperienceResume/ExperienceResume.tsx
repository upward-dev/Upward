import React from 'react'
import { useForm } from 'react-hook-form'

interface ProjectProps {
  userId: string
}

type ExperienceValues = {
  userTitle: string
  accomplishments: string
  companyName: string
  location: string
  from: Date
  to: Date
  presentDate: Date
}

const handleAddExperience = () => {
  //add more experience
}

const handleRemoveExperience = () => {
  //remove exeprience
}

const handlePresentDate = () => {
  //set end date to today's date when ticked
}

export const ExperienceResume = () => {
  return (
    <div className="container-fluid">
      <h1>Add Your Experiences</h1>

      <ExperienceCard />
      <button type="button" className="btn btn-secondary ">
        Add more Experience
      </button>
    </div>
  )
}

const ExperienceCard = () => {
  const { register, watch } = useForm<ExperienceValues>()
  console.log(watch())
  return (
    <div className="card px-3">
      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">Experience</h5>{' '}
          </span>
          <span className="col">
            <button type="button" className="btn nav-item" id="button-addon1">
              Remove Experience
            </button>
          </span>
        </div>
        <div className="input-group mb-3 mt-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Role Title:
          </span>
          <select
            className="form-select form-control-sm"
            aria-label="User Title"
            {...register('userTitle')}>
            <option selected>Select Role Title</option>
            {
              //sample option below
            }
            <option value="1">FRONTEND</option>
            <option value="2">BACKEND</option>
            <option value="3"> FULLSTACK</option>
            {
              //pass in RoleDescription schema? or make a schema for this?
              //add register value to listen react-form-hook
            }
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Company Name:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            {...register('companyName')}
            placeholder="Company Name"
            id="companyName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Accomplishments:
          </span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            {...register('accomplishments')}
            placeholder="Accomplishments (List at least 3) What did you build? What was the impact for the business? What was your role? What technologies did you use?"
            id="accomplishments"
            rows="3"
          />
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="fromDate"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Start Date:
          </label>
          <input {...register('from')} className="form-control" type="date" />

          <label
            htmlFor="fromDate"
            className="input-group-text"
            id="inputGroup-sizing-default">
            End Date:
          </label>
          <input {...register('from')} className="form-control" type="date" />

          <div className="form-check" style={{ marginLeft: '1rem' }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="presentDate"
            />
            <label className="form-check-label" for="presentDate">
              Present
            </label>
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Location:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            {...register('location')}
            id="location"
            placeholder="Location"
          />
        </div>
        <div className="input-group mb-3">
          <p>Tech Stack:</p>
          {
            //TODO: Confirm values here is it the FrontEnd/BackEnd/Operation/ schema or make another one
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceResume
