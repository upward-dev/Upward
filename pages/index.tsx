import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '../lib/prisma'

export default function Home() {
  return (
    <div className="page-margin-top">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src="/girl.png" width="100%" alt="upward-logo"></img>
          </div>
            <div className="col-lg">
              <h1 className="title mt-5" >
                Find an awesome role
              </h1>
              <p>
                It's free for candidates! Sign up to:
              </p>
              <p>
                <ul>
                  <li> Get companies to apply to interview you </li>
                  <li> Create a sharable online resume with our profile builder specialized for software engineers </li>
                  <li> Access technical interview preparation materials, workshops and mentorship </li>
                  <li> Schedule technical and non techncial mock interviews with engineering executives </li>
                </ul>
              </p>
              <div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdC-AbV2SNhMS99yhY6r4Gu34UC9DhVWIM7utII6irV1pyaSw/viewform"
                  target="_blank">
                  <button
    
                    type="button"
                    className="btn btn-secondary">
                    Join The Waitlist
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

//Example of fetching users from prisma
// // Fetch all users (in /pages/index.tsx) - Example calling the database
// export async function getStaticProps() {
//   const users = await prisma.user.findMany()
//   return {
//     props : { users }
//   }
// }
