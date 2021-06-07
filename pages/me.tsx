import React from 'react'
import { useRouter } from 'next/router';
import {LINKEDIN_OAUTH} from '../pages/api/linkedin'

const Me = () => {
  const router = useRouter(); 
  if (router.query.code) {  
  LINKEDIN_OAUTH(router.query.code)
  }
  return (
    <div>
        <h1> Hello </h1>
    </div>
  );
};
export default Me;