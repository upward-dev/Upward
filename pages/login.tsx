import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../src/components/LoginForm/LoginForm';
import {Magic} from "magic-sdk";
import { magic } from "../src/util/Magic/magic.config";
import {UserContext} from "../src/util/Magic/userContext";
import Router from 'next/router';
import { LoginLinkedinWithMagic, LoginMagicSuccess, LoginMagicUser } from '../src/util/Magic/magicFunctions';

function Login() {
    const userContext = useContext(UserContext);
    if(!userContext) { return null;}
    const {user,setUser} = userContext;

    
 
    async function handleLoginWithEmail(e,data: { userEmail: string; }):Promise<void> {
        e.preventDefault();
      const email = e.currentTarget.userEmail.value;
       try {
          // Trigger Magic link to be sent to user
          let response = await LoginMagicUser(email);
           LoginMagicSuccess(response,setUser,Router);
           
        } catch (error) {
          return error;
        }
        return;
      }

      
    async function handleLoginWithLinkedin(e,data: { userEmail: string; }):Promise<void> {
      let parent = e.currentTarget.parentElement.children[0];

    // const email = e.currentTarget.userEmail.value;
     try {
        // Trigger Magic link to be sent to user
        let response = await LoginLinkedinWithMagic("rachaelconcessio@gmail.com");
      
         
      } catch (error) {
        return error;
      }
      return;
    }



    return (
        <main className="container">
            <section className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <LoginForm submitLinkedin={handleLoginWithLinkedin} submitForm={handleLoginWithEmail} />
            </section>
        </main>
    );
}

export default Login;