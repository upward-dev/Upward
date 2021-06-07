import Nav from './Nav'
import React, { ReactNode } from 'react'
// import Meta from "./Meta";

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Meta /> */}
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
