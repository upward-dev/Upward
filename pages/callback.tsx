import { useEffect,useContext } from 'react'
import { useRouter } from 'next/router'
import { magic } from '../lib/Magic/magic'
import Loading from '../components/Loading'
import { UserContext } from '../lib/userContext'
import { authenticateWithServer } from '../lib/Magic/magicFunctions'

const Callback = () => {
  const router = useRouter()
  const [user, setUser] = useContext(UserContext)

  // The redirect contains a `provider` query param if the user is logging in with a social provider
  useEffect(() => {
    router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin()
  }, [router.query])

  const finishEmailRedirectLogin = () => {
    if (router.query.magic_credential)
      magic.auth
        .loginWithCredential()
        .then((didToken) => authenticateWithServer(didToken, setUser))
  }
  const finishSocialLogin = async () => {
    let result = await magic.oauth.getRedirectResult()
    authenticateWithServer(result.magic.idToken, setUser)
  }

  return (
    <div className="page-margin-top pt-5">
      <Loading />
      <p className="text-center mt-2">Profile is loading</p>
    </div>
  )
}

export default Callback
