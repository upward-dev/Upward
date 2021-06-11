import React, {useEffect} from 'react'
import { useRouter } from 'next/router';
import {LINKEDIN_OAUTH} from '../pages/api/linkedin'

//redirect route for LinkedIn Authentication
const Me = () => {
  const router = useRouter(); 
    if (router.query.code) {  
      LINKEDIN_OAUTH(router.query.code)
      router.push('/me')
    } 

  return (
    <div>
     Welcome
    </div>
  );
};
export default Me;
