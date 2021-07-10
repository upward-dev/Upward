import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../lib/userContext'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  const [user, setUser, loggedIn] = useContext(UserContext)

  if (!loggedIn) {
    return <p className="page-margin-top">No user</p>
  }

  return <>{children}</>
}

export default PrivateRoute
