import React from 'react'
import Head from 'next/head'
import { InlineWidget } from "react-calendly";

function Events() {
  return (
    <div className="container page-margin-top">
         <InlineWidget url="https://calendly.com/upward-dev" />

    </div>
  )
}

export default Events
