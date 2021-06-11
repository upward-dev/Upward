import React from 'react';
import RegisterForm from '../src/components/RegisterForm/RegisterForm';
// import { LINKEDIN_URL } from "../pages/api/linkedin";

function Register() {
    return(
        <div className="page-margin-top">
            <div className="container text-center">
                <section className="border rounded p-3">
                    <RegisterForm />
                    or
                    <br></br>
                 {/* <a href={`${LINKEDIN_URL}`}>
                      <img
                        src="./Sign-In-Small---Default.png"
                        alt="Upward"
                        className="icon-medium"></img>
                    </a> */}
                </section>
            </div>
        </div>

        

    );
}

export default Register;