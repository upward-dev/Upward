import { useState, useEffect, useContext } from 'react'
import Router from 'next/router'
import { magic } from '../lib/Magic/magic'
import LinkedInLogin from '../components/LinkedInLogin'
import { UserContext } from '../lib/userContext'
import EmailLogin from '../components/EmailLogin'
import { authenticateWithServer } from '../lib/Magic/magicFunctions'

const Login = () => {
  const [disabled, setDisabled] = useState(false)
  const [user, setUser] = useContext(UserContext)

 
  // Redirect to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push('/profile')
  }, [user])


  async function handleLoginWithEmail(email: string) {
    try {
      setDisabled(true) // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href // optional redirect back to your app after magic link is clicked
      })
      authenticateWithServer(didToken, setUser) // if login request is successful setUser to user.getMetadata (magic function)
    } catch (error) {
      setDisabled(false) // re-enable login button - user may have requested to edit their email
      console.log(error)
    }
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL('/callback', window.location.origin).href // required redirect to finish social login
    })
  }

  return (
    <div className="page-margin-top">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <EmailLogin
            onEmailSubmit={handleLoginWithEmail}
            disabled={disabled}
          />
          <div className="text-center" style={{ width: 300 }}>
            <LinkedInLogin onSubmit={handleLoginWithSocial} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
