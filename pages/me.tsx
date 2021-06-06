import React from 'react'
import { useRouter } from 'next/router';
import {linkedin, LINKEDIN_URL} from '/pages/api/linkedin'

const Me = () => {
  const router = useRouter(); 
  if (router.query.code) {  
  linkedin(router.query.code)
  }
  return (
    <div>
        <h1> Hello </h1>
    </div>
  );
};
export default Me;