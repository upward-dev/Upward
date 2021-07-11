import { createContext, useState, useEffect } from 'react'
import { magic } from './Magic/magic'

export const UserContext = createContext(null)

interface User {
  issuer: String
  email: String
  publicAddress: String
}

export const UserProvider = (props) => {
  const [user, setUser] = useState<User>()
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  useEffect(() => {
    // if user doesn't exist, set user to magic logged in user
    ReAuthenticateUser()
  }, [])

  // Returns user metadata object if user is currently logged in
  const ReAuthenticateUser = async () => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
      if (await magic.user.isLoggedIn()) {
        let loggedInUser = await magic.user.getMetadata()
        console.log(loggedInUser);
        setUser(loggedInUser)
        setLoggedIn(true)
      }
    }
  }

  return (
    <UserContext.Provider value={[user, setUser, loggedIn]}>
      {props.children}
    </UserContext.Provider>
  )
}
