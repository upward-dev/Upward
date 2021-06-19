import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import prisma from '../../../lib/prisma'
import { PrismaClient } from '@prisma/client'

type BasicInfoValues = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  gitHubURL: string
  personalWebsite: string
}

type LookingForValues = {
  location: []
  role: []
  companySize: []
  compensationMin: number
  compensationMax: number
  visaNeeded: string
  ambitionThreeYears: string
  reasonForLooking: string
}

type TechnologyValues = {
  frontEnd: []
  backEnd: []
  Database: []
  Infrastructure: []
}

type AboutValues = {
  BasicInfoValues
  LookingForValues
  TechnologyValues
}

interface Props {
  locationsProps?: []
  roleTypesProps?: []
}

const locations = 'REMOTE BAY_AREA NEW_YORK AUSTIN DENVER SEATTLE BOSTON WASHINGTON SAN_DIEGO LOS_ANGELES DALLAS CHICAGO HOUSTON PHOENIX PHILADELPHIA'.split(
  ' '
)
const visas = 'NEW_H1B TRANSFER_H1B TN_VISA F1 NONE'.split(' ')
const sizes = 'SEED_10 SERIES_A_10_30 SERIES_B_30_100 SERIES_C_D_E_F_100_PLUS PUBLIC_COMPANY NO_PREFERENCE'.split(
  ' '
)

const AboutResume: React.FC<Props> = ({ children, ...props }) => {
  const locationsArr = props.locationsProps
  const rolesArr = props.roleTypesProps
  const { register, watch } = useForm<AboutValues>()
  return (
    <div className="page-margin-top card px-3">
      <div className="card-body">
        <div className="row align-items-start">
          <span className="col">
            <h5 className="card-title">Profile</h5>{' '}
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
            {locations.map((item, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={'withIndex.' + i * 2}
                  />
                  {item}
                </label>
              </div>
            ))}
          </div>
          <div>
            {
              // {locationsArr.map((obj) => (
              // <label key={obj.id}>
              //   <input
              //     type="checkbox"
              //     value={obj.location}
              //     name={'withIndex.' + obj.id * 2}
              //   />
              //   {obj.location}
              //</label>
              //))}
            }
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
                    name={'withIndex.' + obj.id * 2}
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
            {sizes.map((item, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={'withIndex.' + i * 2}
                  />
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="email"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Compensation:
          </label>
          <input
            {...register('compensationMin')}
            className="form-control"
            type="text"
            placeholder="100,000"
          />
          <span className="ms-2 me-2">{' - '}</span>
          <input
            {...register('compensationMax')}
            className="form-control"
            type="text"
            placeholder="150,000"
          />
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="gitHubURL"
            className="input-group-text"
            id="inputGroup-sizing-default">
            VISA needed:
          </label>
          <select
            className="form-select form-control-sm"
            aria-label="User Title"
            {...register('userTitle')}>
            <option selected>Select Visa</option>
            {visas.map((c, i) => (
              <option key={c} value={c} name={'withIndex.' + i * 2}>
                {c}
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
            {/* {locations.map((item, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={'withIndex.' + i * 2}
                  />
                  {item}
                </label>
              </div>
            ))} */}
          </div>
          <div></div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Backend Technology:
          </label>
          <div className="align-self-start">
            {/* {rolesArr.map((obj) => (
              <div className="form-check">
                <label key={obj.id} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={obj.type}
                    name={'withIndex.' + obj.id * 2}
                  />
                  {obj.type}
                </label>
              </div>
            ))} */}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Operations Technology:
          </label>{' '}
          <div className="align-self-start">
            {/* {sizes.map((item, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={'withIndex.' + i * 2}
                  />
                  {item}
                </label>
              </div>
            ))} */}
          </div>
        </div>

        <div className="input-group d-flex align-items-center mb-3">
          <label className="input-group-text align-self-start me-4">
            Storage Technology:
          </label>{' '}
          <div className="align-self-start">
            {/* {sizes.map((item, i) => (
              <div className="form-check">
                <label key={i} className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={item}
                    name={'withIndex.' + i * 2}
                  />
                  {item}
                </label>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutResume
