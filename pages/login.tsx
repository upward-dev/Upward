import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';
import {Magic} from "magic-sdk";
import { magic } from "../src/util/Magic/magic.config";
import {UserContext} from "../src/util/Magic/userContext";
import Router from 'next/router';

function Login() {
    const {user,setUser}  = useContext(UserContext);
    useEffect(() => {
        user?.isuser && Router.push('/profile');
    },[user])
    
    async function handleLoginWithEmail(data: { userEmail: string; }):Promise<void> {
        const {userEmail} = data;
        try {
          // Trigger Magic link to be sent to user
            let didToken = await magic.auth.loginWithMagicLink({
              email:userEmail,
              redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
            });
            // Validate didToken with server
            const res = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + didToken,
              },
          });
          if (res.status === 200) {
            // Set the UserContext to the now logged in user
              let userMetadata = magic && await magic.user.getMetadata();
              let userId =  userMetadata.issuer.split(":")[2];
              await setUser(userMetadata);
              Router.push(`/resumeProfile/${userId}`);
              return userMetadata;
          }
        } catch (error) {
          return error;
        }
        return;
      }
    return (
        <main className="container">
            <section className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <LoginForm submitForm={handleLoginWithEmail} />
            </section>
        </main>
    );
}

export default Login;

