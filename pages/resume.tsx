import { stringify } from 'querystring'
import React, {useState,useEffect} from 'react'
import Resume from '../src/components/Resume/Resume';

export const ResumePage = () => {
  const [userId,setUserId] = useState<string>('');
  useEffect(() => {
    const getMockUserData = async () => {
      //TODO - modify func to grab user data before allowing user to build resume
      let userData = {userId:'user123'};
      setUserId(userData.userId)
    }
    getMockUserData();  
  });

  return (
    <div>
      <Resume userId={userId}/>
    </div>
  )
}

export default ResumePage;
