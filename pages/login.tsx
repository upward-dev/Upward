import { useState, useEffect, useContext } from 'react'
import Router from 'next/router'
import { magic } from '../lib/magic'
// import EmailForm from '../components/email-form';
import LinkedInLogin from '../components/LinkedInLogin'
import { useForm } from 'react-hook-form'

const Login = () => {
  const [disabled, setDisabled] = useState(false)
  const [user, setUser] = useState(null)

  const onSubmit = async (e: object) => {
    // e.preventDefault();
    // await primsa db response
    console.log(e)
  }

  const validate = (values: object) => {
    return {}
  }

  const { register, handleSubmit } = useForm({
    // onSubmit,
    // validate
  })

  const userEmail = register('userEmail')
  const userPassword = register('userPassword')

  // Redirec to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push('/profile')
  }, [user])

  //DO NOT DELETE!!!!
  //   async function handleLoginWithEmail(email) {
  //     try {
  //       setDisabled(true); // disable login button to prevent multiple emails from being triggered

  //       // Trigger Magic link to be sent to user
  //       let didToken = await magic.auth.loginWithMagicLink({
  //         email,
  //         redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
  //       });

  //       // Validate didToken with server
  //       const res = await fetch('/api/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer ' + didToken,
  //         },
  //       });

  //       if (res.status === 200) {
  //         // Set the UserContext to the now logged in user
  //         let userMetadata = await magic.user.getMetadata();
  //         await setUser(userMetadata);
  //         Router.push('/profile');
  //       }
  //     } catch (error) {
  //       setDisabled(false); // re-enable login button - user may have requested to edit their email
  //       console.log(error);
  //     }
  //   }

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
          <form className="border rounded p-3 login-form">
            <h2 className="text-center fs-2 mb-3">Login</h2>
            <div className="mb-3">
              <input
                {...userEmail}
                placeholder="Email Address"
                className="form-control"
                required
              />
              {/*   {userEmail.meta.touched && userEmail.meta.error && (
    <span>{userEmail.meta.error}</span>
    )}*/}
            </div>
            <div className="mb-2">
              {/*   <input {...userPassword} placeholder="Password" className="form-control" required/>
    {userPassword.meta.touched && userPassword.meta.error && (
    <span>{userPassword.meta.error}</span>
    )}*/}
            </div>
            <br />
            <div className="d-grid gap-1 col-6 mx-auto rounded btn-secondary">
              <button type="submit" className="btn btn-lg active text-dark ">
                Sign In
              </button>
            </div>
            <div className="text-center my-2">
              New to Upward? <a href="/register">Register now</a>
            </div>
            {/* <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} /> */}
          </form>
          <div className="text-center" style={{ width: 300 }}>
            <LinkedInLogin onSubmit={handleLoginWithSocial} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
