import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../lib/userContext'

const PrivateRoute = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useContext(UserContext)

  const checkLoggedIn = async () => {
    let isLoggedIn = await user

    if (isLoggedIn) {
      return true
    } else {
      return false
    }
  }

  let loggedIn = checkLoggedIn()

  if (!loggedIn) {
    return (
      <div className="page-margin-top mx-auto w-25 border rounded text-center py-2">
        <p>User does not exist</p>
        <a href="/">
          <button className="px-4 py-2 rounded border">Return Home</button>
        </a>
      </div>
    )
  }

  return <>{children}</>
}

export default PrivateRoute
