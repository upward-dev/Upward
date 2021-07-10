import { magic } from './magic'
import Router from 'next/router'

// Functions for handling user authentication with magic

export const handleLoginWithEmail = async (
  email: string,
  setUser: any,
  setDisabled: (arg0: boolean) => void
) => {
  try {
    // disable login button to prevent multiple emails from being triggered
    setDisabled(true)

    // Trigger Magic link to be sent to user
    let token = await magic.auth.loginWithMagicLink({
      email,
      redirectURI: new URL('/callback', window.location.origin).href // optional redirect back to your app after magic link is clicked
    })

    authenticateWithServer(token, setUser)
  } catch (error) {
    // re-enable login button - user may have requested to edit their email
    setDisabled(false)
    console.log(error)
  }
}

//  Send token to server to validate
export const authenticateWithServer = async (token: string, setUser: any) => {
  let res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  if (res.status === 200) {
    // Set the UserContext to the now logged in user
    let userMetadata = await magic.user.getMetadata()
    await setUser(userMetadata)
    Router.push('/profile')
  }
}

// login with social provider - linkedin
export const finishSocialLogin = async (setUser: any) => {
  let result = await magic.oauth.getRedirectResult()
  authenticateWithServer(result.magic.idToken, setUser)
}

// logout user
export const logoutUser = async (setUser: (arg0: any) => void) => {
  try {
    await magic.user.logout()
    Router.push('/') // return to homepage once user is logged out
    setUser(null) // set context user to null once logged out
  } catch (err) {
    console.log(err)
  }
}
