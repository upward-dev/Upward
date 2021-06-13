import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';
import {Magic} from "magic-sdk";
import { magic } from "../src/util/Magic/magic.config";
import {UserContext} from "../src/util/Magic/userContext";
import Router from 'next/router';
<<<<<<< HEAD
import { LoginMagicSuccess, LoginMagicUser } from '../src/util/Magic/magicFunctions';
=======
>>>>>>> 319d6b7f917328dc17e65c7080206ad216aa1b43

function Login() {
    const userContext = useContext(UserContext);
    if(!userContext) { return null;}
    const {user,setUser} = userContext;

 
    async function handleLoginWithEmail(data: { userEmail: string; }):Promise<void> {
        const {userEmail} = data;
        try {
          // Trigger Magic link to be sent to user
          let response = await LoginMagicUser(userEmail);
           LoginMagicSuccess(response,setUser,Router);

    
        } catch (error) {
          return error;
        }
        return;
      }

      async function createUser() {
        let newUser = await fetch('/api/user')
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

