import React, { FC, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type ProfileValues = {
  id?: string
  firstName: string
  lastName: string
  email: string
  years: number
  phoneNumber: number
  gitHubURL: string
  personalWebsite: string
  calendlyLink: string
  location: string[]
  role: string[]
  companySize: string[]
  compensationMin: number
  compensationMax: number
  visa: string
  ambition: string
  reasonForLooking: string
  frontEnd: string[]
  backEnd: string[]
  database: string[]
  infrastructure: string[]
  technology?: string
}

type locType = {
  id: number
  location: string
}

type roleType = {
  id: number
  type: string
}

type techType = {
  id: string
  technology: string
}

interface ProfileProps {
  children: any
  id?: number
  locationsProps?: []
  roleTypesProps?: []
  frontEndProps?: []
  backEndProps?: []
  operationsProps?: []
  storagesProps?: []
  createProfile?: (data: object) => Promise<void>
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required'),
  years: yup.number(),
  phoneNumber: yup.number().required('Phone number is required'),
  gitHubURL: yup.string().url().notRequired(),
  personalWebsite: yup.string().url().notRequired(),
  calendlyLink: yup.string().url().notRequired(),
  location: yup.array().ensure().default([]),
  role: yup.array().ensure().default([]),
  companySize: yup.array().ensure().default([]),
  compensationMin: yup.string(),
  compensationMax: yup.string(),
  visa: yup.string().required('Please select a visa'),
  ambition: yup.string(),
  reasonForLooking: yup.string().notRequired(),
  frontEnd: yup.array().ensure().default([]),
  backEnd: yup.array().ensure().default([]),
  database: yup.array().default([]),
  infrastructure: yup.array().default([])
})

const visas = [
  { visa: 'NEW_H1B', label: 'New H1B' },
  { visa: 'TRANSFER_H1B', label: 'Transfer H1B' },
  { visa: 'TN_VISA', label: 'TN Visa' },
  { visa: 'F1', label: 'F1' },
  { visa: 'NONE', label: 'None' }
]
const sizes = [
  { size: 'SEED_10', label: 'Seed < 10 employees' },
  { size: 'SERIES_A_10_30', label: 'Series A - 10-30 employees' },
  { size: 'SERIES_B_30_100', label: 'Series B - 30-100 employees' },
  {
    size: 'SERIES_C_D_E_F_100_PLUS',
    label: 'Series C, D, E, F - 100+ employees'
  },
  { size: 'PUBLIC_COMPANY', label: 'Public Company' },
  { size: 'NO_PREFERENCE', label: 'No Preference' }
]

const Profile = ({ children, ...props }: ProfileProps) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProfileValues>({
    resolver: yupResolver(schema)
  })
  const locationsArr: locType[] = props.locationsProps
  const rolesArr: roleType[] = props.roleTypesProps
  const frontEndArr: techType[] = props.frontEndProps
  const backEndArr: techType[] = props.backEndProps
  const operationsArr: techType[] = props.operationsProps
  const storagesArr: techType[] = props.storagesProps

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const onSubmit: SubmitHandler<ProfileValues> = (data) => {
    setIsSubmitted(true)
    return props.createProfile(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">About Me</h5>{' '}
          </span>
        </div>
        <div className="input-group mb-3">
          <label htmlFor="firstName" className="input-group-text">
            First Name:
          </label>
          <input
            {...register('firstName')}
            className="form-control"
            type="text"
            id="firstName"
            placeholder="Jane"
          />
          <label htmlFor="lastName" className="input-group-text">
            Last Name:
          </label>
          <input
            {...register('lastName')}
            className="form-control"
            id="lastName"
            type="text"
            placeholder="Doe"
          />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="phoneNumber" className="input-group-text">
            Phone Number:
          </label>
          <input
            {...register('phoneNumber')}
            className="form-control"
            id="phoneNumber"
            type="text"
            placeholder="415 123 1234"
          />
        </div>

        <div className="input-group mb-3">
          yup{' '}
          <label htmlFor="email" className="input-group-text">
            Email:
          </label>
          <input
            {...register('email')}
            className="form-control"
            id="email"
            type="text"
            placeholder="janedoe@email.com"
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text">Years of Experience:</label>
          <input
            {...register('years')}
            className="form-control"
            id="years"
            type="number"
            placeholder="5"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="gitHubURL"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Github URL:
          </label>
          <input
            {...register('gitHubURL')}
            className="form-control"
            type="text"
            placeholder="https://github.com/user/"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="Portfolio Website"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Portfolio URL:
          </label>
          <input
            {...register('personalWebsite')}
            className="form-control"
            type="text"
            placeholder="https://janedoe.com/"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="Calendly Link"
            className="input-group-text"
            id="calendlyLink">
            Calendly Link:
          </label>
          <input
            {...register('calendlyLink')}
            className="form-control"
            type="text"
            placeholder="https://calendly.com/jane/30-minute-meeting-1"
          />
        </div>
      </div>

      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">What You're Looking For</h5>
          </span>
        </div>
        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Location:
          </label>
          <div className="align-self-start">
            {locationsArr.map((locObj) => (
              <div className="form-check">
                <label key={locObj.id} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={locObj.location}
                    name={locObj.location}
                    id={locObj.location}
                    {...register('location', { required: true })}
                  />
                  {locObj.location}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Role:
          </label>
          <div className="align-self-start">
            {rolesArr.map((obj) => (
              <div className="form-check">
                <label key={obj.id} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={obj.type}
                    name={obj.type}
                    {...register('role')}
                  />
                  {obj.type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Company Size:
          </label>{' '}
          <div className="align-self-start">
            {sizes.map((obj, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={obj.size}
                    id={obj.size}
                    name={obj.size}
                    {...register('companySize')}
                  />
                  {obj.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="input-group mb-3">
          <label htmlFor="email" className="input-group-text">
            Compensation:
          </label>
          <input
            {...register('compensationMin')}
            className="form-control"
            type="text"
            placeholder="100000"
          />
          <span className="ms-2 me-2">{' - '}</span>
          <input
            {...register('compensationMax')}
            className="form-control"
            type="text"
            placeholder="125000"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="gitHubURL"
            className="input-group-text"
            id="inputGroup-sizing-default">
            VISA Needed:
          </label>
          <select
            className="form-select form-control-sm"
            aria-label="Visa Needed"
            {...register('visa')}>
            <option selected>Select a Visa</option>
            {visas.map((obj, i) => (
              <option key={i} value={obj.visa}>
                {obj.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="Portfolio Website"
            className="input-group-text"
            id="inputGroup-sizing-default">
            3 Year Ambition:
          </label>
          <input
            className="form-control"
            type="text"
            {...register('ambition')}
            id="ambition"
            placeholder="To be a manager leading a team of developers"
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" id="inputGroup-sizing-default">
            Reason for Looking:
          </label>
          <input
            className="form-control"
            type="text"
            id="reasonForLooking"
            {...register('reasonForLooking')}
            placeholder="To learn new tech stacks and career growth."
          />
        </div>
      </div>

      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">Technologoies</h5>
          </span>
        </div>
        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Frontend Technology:
          </label>
          <div className="align-self-start">
            {frontEndArr &&
              frontEndArr.map((obj) => (
                <div className="form-check">
                  <label key={obj.id} className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={obj.id}
                      value={obj.technology}
                      name={obj.technology}
                      {...register('frontEnd')}
                    />
                    {obj.technology}
                  </label>
                </div>
              ))}
          </div>
          <div></div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Backend Technology:
          </label>
          <div className="align-self-start">
            {backEndArr &&
              backEndArr.map((obj) => (
                <div className="form-check">
                  <label key={obj.id} className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={obj.technology}
                      id={obj.id}
                      name={obj.technology}
                      {...register('backEnd')}
                    />
                    {obj.technology}
                  </label>
                </div>
              ))}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Operations Technology:
          </label>{' '}
          <div className="align-self-start">
            {operationsArr &&
              operationsArr.map((obj) => (
                <div className="form-check">
                  <label key={obj.id} className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={obj.id}
                      value={obj.technology}
                      name={obj.technology}
                      {...register('infrastructure')}
                    />
                    {obj.technology}
                  </label>
                </div>
              ))}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Storage Technology:
          </label>{' '}
          <div className="align-self-start">
            {storagesArr &&
              storagesArr.map((obj) => (
                <div className="form-check">
                  <label key={obj.id} className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={obj.id}
                      value={obj.technology}
                      name={obj.technology}
                      {...register('database')}
                    />
                    {obj.technology}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="w-100 d-flex flex-row align-items-center justify-content-center">
        <button
          type="submit"
          className="btn btn-outline-secondary w-25 text-dark m-2">
          Save
        </button>
        <button
          type="reset"
          className="btn btn-outline-secondary w-25 text-dark m-2"
          onClick={(e) => {
            reset()
          }}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default Profile
