import React from 'react'
import { useForm } from 'react-hook-form'
import prisma from '../../../lib/prisma'
import { PrismaClient } from '@prisma/client'

type AboutValues = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: number
  gitHubURL: string
  personalWebsite: string
}

interface AboutProps {
  isHidden: boolean
  isSubmitted: boolean
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const locationProps = await prisma.location.findMany()
  return {
    props: { locationProps }
  }
}

const locations = 'REMOTE BAY_AREA NEW_YORK AUSTIN DENVER SEATTLE BOSTON WASHINGTON SAN_DIEGO LOS_ANGELES DALLAS CHICAGO HOUSTON PHOENIX PHILADELPHIA'.split(
  ' '
)

const visas = 'NEW_H1B TRANSFER_H1B TN_VISA F1 NONE'.split(' ')

export default function AboutResume(
  { isHidden, isSubmitted }: AboutProps,
  { locationProps }
) {
  const { register, watch } = useForm<AboutValues>()
  console.log('locationProps', locationProps)
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
            <h5 className="card-title">What You're Looking For</h5>{' '}
          </span>
        </div>
        <div className="input-group mb-3">
          <label
            htmlFor="firstName"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Location
          </label>
          {/* 
        take values from DB
        */}
          {locations.map((c, i) => (
            <label key={c}>
              <input type="checkbox" value={c} name={'withIndex.' + i * 2} />
              {c}
            </label>
          ))}
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" id="inputGroup-sizing-default">
            Role:
          </label>
          {
            //map Role from DB
          }
        </div>

        <div className="input-group mb-3">
          <label
            htmlFor="email"
            className="input-group-text"
            id="inputGroup-sizing-default">
            Compensation
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
            VISA needed:
          </label>
          <select
            className="form-select form-control-sm"
            aria-label="User Title"
            {...register('userTitle')}>
            <option selected>Select Visa</option>
            {
              visas.map((c, i) => (
            <option key={c} value={c} name={'withIndex.' + i * 2}>{c}</option>
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
  )
}