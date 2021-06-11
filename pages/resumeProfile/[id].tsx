import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/next-server/server/router'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "../../src/util/Magic/userContext"

export default function ResumeProfile() {
    const router = useRouter();
    const {user} = useContext(UserContext);
    const { id } = router.query;
    return (
        <div className="container page-margin-top">
            {user?.loading ?  (
                <p>Loading..</p>
            ): (
                user && (      
                <ul className="list-group">
                    <li className="list-group-item">
                        <p>Email <span>{user.email}</span></p>
                    </li>
                    <li className="list-group-item">
                    <p>Email <span>{user.issuer}</span></p>
                    </li>                
                </ul>   
                )
            )}  
        </div>
    )
}