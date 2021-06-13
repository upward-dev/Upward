import React, { createContext, ReactNode, useState } from 'react';
interface IUser {
    email:string;
    issuer:string;
    publicAddress:string
}
interface IValue {
    user:IUser, 
    setUser:(user:any) => any

}
export const UserContext = createContext<IValue | null>(null);
type ContextProps = {
    children:ReactNode;
}
export const UserContextProvider: React.FC = (props) => {
    const [user,setUser] = useState({
        email:"",
        issuer:"",
        publicAddress:""
    });
    const values = {
        user,
        setUser
    }
    console.log(values);
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}
