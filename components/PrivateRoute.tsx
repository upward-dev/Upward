import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../lib/userContext'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  const [user, setUser, loggedIn] = useContext(UserContext)

  if (!loggedIn) {
    return <div className="page-margin-top mx-auto w-25 border rounded text-center py-2">
      <p>User does not exist</p>
      <a href='/'>
         <button className="px-4 py-2 rounded border">Return Home</button>
      </a>
    </div>
  }

  return <>{children}</>
}

export default PrivateRoute
