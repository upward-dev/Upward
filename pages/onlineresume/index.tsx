import React, { useState } from 'react'
import { Experience } from '../../components/Experience'

import Profile from '../../components/Profile'
import prisma from '../../lib/prisma'

import { Project } from '../../components/Project'
import { projectService } from '../../services/projects'
import { profileService } from '../../services/profile'
interface ProjectI {
  title: string
  description: string
  url: string
  from: Date
  to: Date
}

interface LocationsI {
  id: number
  location: string
}
interface RolesI {
  id: number
  type: string
}

interface FrontEndI {
  id: number
  technology: string
}

interface BackEndI {
  id: number
  technology: string
}

interface StorageI {
  id: number
  technology: string
}

interface OperationsI {
  id: number
  technology: string
}

export async function getStaticProps() {
  const frontEnd: FrontEndI[] = await prisma.frontendTechnology.findMany()
  const backEnd: BackEndI[] = await prisma.backendTechnology.findMany()
  const operations: OperationsI[] = await prisma.operationsTechnology.findMany()
  const storages: StorageI[] = await prisma.storageTechnology.findMany()
  const locations: LocationsI[] = await prisma.locationWanted.findMany()
  const roleTypes: RolesI[] = await prisma.roleType.findMany()
  return {
    props: { locations, frontEnd, backEnd, operations, storages, roleTypes }
  }
}

function OnlineResume({
  locations,
  frontEnd,
  backEnd,
  operations,
  storages,
  roleTypes
}) {
  const [showProject, setShowProject] = useState<boolean>(false)
  const [showExperience, setShowExperience] = useState<boolean>(false)
  const createProject = (data: ProjectI) => {
    data = Object.assign(data, { ...data, CREATE_PROJECT: true })
    return projectService
      .create(data)
      .then(() => console.log('project added to db'))
      .catch((err) => console.log(err))
  }

  const createProfile = (data) => {
    console.log('dta about', data)
    data = Object.assign(data, { ...data })
    return profileService
      .create(data)
      .then(() => console.log('profile added to db'))
      .catch((err) => console.log('err', err))
  }
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center mt-5 mb-4">
      <h2 className="mt-5">Create Your Profile</h2>
      <div className="card">
        <Profile
          roleTypesProps={roleTypes}
          locationsProps={locations}
          frontEndProps={frontEnd}
          backEndProps={backEnd}
          operationsProps={operations}
          storagesProps={storages}
          createProfile={createProfile}
        />
        <div
          className="w-100"
          id="accordion"
          role="tablist"
          aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="headingOne">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  onClick={() => setShowProject(!showProject)}
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  Add Projects
                </a>
              </h5>
            </div>
            <div
              id="collapseOne"
              className={`collapse ${showProject && 'show'}`}
              role="tabpanel"
              aria-labelledby="headingOne">
              <div className="card-block">
                <Project isHidden={false} createProject={createProject} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="headingTwo">
              <h5 className="mb-0">
                <a
                  className="collapsed"
                  onClick={() => setShowExperience(!showExperience)}
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo">
                  Add Experiences
                </a>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${showExperience && 'show'}`}
              role="tabpanel"
              aria-labelledby="headingTwo">
              <div className="card-block m-2">
                EXPERIENCE COMPONENT GOES HERE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineResume
