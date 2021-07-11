// profile page , where magic links callback redirects to after user logs in
import { useContext } from 'react'
import { UserContext } from '../lib/userContext'
import Loading from '../components/Loading'
import PrivateRoute from '../components/PrivateRoute'

export default function Profile() {
  const [user, setUser] = useContext(UserContext)
  // check if user is logged in , if not show loading screen else
  // show profile page.


  return (
    <>
    <PrivateRoute>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <div className="page-margin-top">
            <p>Email {user.email}</p>
            <p>{user.issuer}</p>
          </div>
        )
      )}
      </PrivateRoute>
    </>
  )
}
