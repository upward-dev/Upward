import React from 'react';
import RegisterForm from '../src/components/RegisterForm/RegisterForm';

function Register() {
    return(
        <main className="container">
            <section className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <RegisterForm />
            </section>
        </main>
    );
}

export default Register;