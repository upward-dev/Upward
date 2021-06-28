import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { magic } from '../lib/Magic/magic';
import Loading from '../components/Loading';
import { useContext } from 'react';
import { UserContext } from '../lib/userContext';
import { authenticateWithServer, finishSocialLogin } from '../lib/Magic/magicFunctions';


const Callback = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  // The redirect contains a `provider` query param if the user is logging in with a social provider
  useEffect(() => {
    router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
  }, [router.query]);

  const finishEmailRedirectLogin = () => {
     if (router.query.magic_credential)
      magic.auth.loginWithCredential().then((didToken) => authenticateWithServer(didToken,setUser));
  };
  const finishSocialLogin = async () => {
      let result = await magic.oauth.getRedirectResult();
     authenticateWithServer(result.magic.idToken,setUser);
  };
  

  // `getRedirectResult()` returns an object with user data from Magic and the social provider


  // `loginWithCredential()` returns a didToken for the user logging in
  // const finishEmailRedirectLogin = () => {
  //   if (router.query.magic_credential)
  //     magic.auth.loginWithCredential().then((didToken) => authenticateWithServer(didToken));
  // };

  // // Send token to server to validate
  // const authenticateWithServer = async (didToken) => {
  //   let res = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + didToken,
  //     },
  //   });

  //   if (res.status === 200) {
  //     // Set the UserContext to the now logged in user
  //     let userMetadata = await magic.user.getMetadata();
  //     await setUser(userMetadata);
  //     Router.push('/profile');
  //   }
  // };
 
  return (
      <div className="page-margin-top pt-5">
        <Loading />
        <p className="text-center mt-2">Profile is loading</p>
     </div>
    )
};

export default Callback;
