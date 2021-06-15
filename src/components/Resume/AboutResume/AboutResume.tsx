import React from 'react'
import { useForm } from 'react-hook-form'

type AboutValues = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  gitHubURL: string
  personalWebsite: string
}

export default function AboutResume() {
  const { register, watch } = useForm<AboutValues>()
  return (
    <div className="card px-3">
      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">ABOUT</h5>{' '}
          </span>
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="firstName"
            className="input-group-text"
            id="inputGroup-sizing-default">
            First Name:
          </label>
          <input
            {...register('firstName')}
            className="form-control"
            type="text"
            placeholder="Jane"
          />
          <label
            htmlFor="lastName"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Last Name:
          </label>
          <input
            {...register('lastName')}
            className="form-control"
            type="text"
            placeholder="Doe"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="phoneNumber"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Phone Number:
          </label>
          <input
            {...register('phoneNumber')}
            className="form-control"
            type="text"
            placeholder="415 123 1234"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="email"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Email:
          </label>
          <input
            {...register('email')}
            className="form-control"
            type="text"
            placeholder="janedoe@email.com"
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
      </div>
    </div>
  )
}
