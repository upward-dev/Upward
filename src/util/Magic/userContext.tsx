import React, { createContext, ReactNode, useState } from 'react';
// interface should be replaced to reflect db fields. 
// These fields are currently returned from magic.link
interface IUser {
    email:string;
    issuer:string;
    publicAddress:string
  }
export const UserContext = createContext<IUser | {}>({});
type ContextProps = {
    children:ReactNode;
}
export const UserContextProvider: React.FC = (props) => {
    const [user,setUser] = useState<IUser | {}>({});
    const values = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}


