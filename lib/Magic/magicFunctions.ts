import {magic} from "./magic";
import Router from 'next/router';
// Functions for handling user authentication with magic


export const handleLoginWithEmail = async(email:string,setUser: any,setDisabled: (arg0: boolean) => void) => {
  try {
    setDisabled(true); // disable login button to prevent multiple emails from being triggered

    // Trigger Magic link to be sent to user
    let didToken = await magic.auth.loginWithMagicLink({
      email,
      redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
    });
    authenticateWithServer(didToken,setUser);
  } catch (error) {
    setDisabled(false); // re-enable login button - user may have requested to edit their email
    console.log(error);
  }
}


//  Send token to server to validate
  export const authenticateWithServer = async (didToken: string,setUser:any) => {
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
    });

    if (res.status === 200) {
      // Set the UserContext to the now logged in user
      let userMetadata = await magic.user.getMetadata();
      await setUser(userMetadata);
      Router.push('/profile');
    }
  };

// login with social provider - linkedin
 export const finishSocialLogin = async (setUser: any) => {
    let result = await magic.oauth.getRedirectResult();
    authenticateWithServer(result.magic.idToken,setUser);
  };

// logout user
export const logoutUser = async(setUser: (arg0: any) => void) => {
    try {
      await magic.user.logout();
      Router.push('/') // return to homepage once user is logged out
      setUser(null) // set context user to null once logged out
    } catch(err) {
      console.log(err);
    }
  }