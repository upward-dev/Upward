import { createContext, useState,useEffect } from 'react';
import { magic } from './Magic/magic';

export const UserContext = createContext(null);
// return object of user.getMetadata
interface User {
    issuer:String,
    email:String,
    publicAddress:String
}

export const UserProvider = (props) => {
    const [user,setUser] = useState<User>();

    useEffect(() => {
        // if user doesn't exist , set user to magic logged in user
        ReAuthenticateUser();
    },[])

 
    // `ReAuthenticateUser()` returns user metadata object if user is currently logged in
    const ReAuthenticateUser = async() => {
        if(!user) {
            if (await magic.user.isLoggedIn()) {
                let loggedInUser = await magic.user.getMetadata();
                setUser(loggedInUser);
                console.log(loggedInUser);
            }
        }
    }
    return (
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
