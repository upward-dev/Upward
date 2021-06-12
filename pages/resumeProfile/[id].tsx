import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/next-server/server/router'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "../../src/util/Magic/userContext"

// needs to be replaced with real api call for data for final
enum Role {
    USER = 'User',
    EMPLOYER = "Employer",
    MENTOR = "Mentor",
    ADMIN = "Admin"
}
interface Profile {
    calendlyLink: string
}
interface iUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role,
    tasks: string[],
    profile: Profile
}


// fake user data
const users: iUser[] = [
    {
        id: 0,
        firstName: 'Rachael',
        lastName: 'Concessio',
        email: 'RachaelConcessio@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: Role.MENTOR,
        tasks: ['Finish coding assessment', 'Learn typescript', 'Learn next.js'],
        profile: {
            calendlyLink: "rachaellink"
        }
    },
    {
        id: 1,
        firstName: 'David',
        lastName: 'Concessio',
        email: 'DavidConcessio@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: Role.USER,
        tasks: ['Apply for jobs'],
        profile: {
            calendlyLink: "davidlink"
        }
    }
];

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
                    <>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <p>Email <span>{user.email}</span></p>
                            </li>
                            <li className="list-group-item">
                            <p>Email <span>{user.issuer}</span></p>
                            </li>                
                        </ul>
                    </>
                )
            )}
             
        </div>
    )
}