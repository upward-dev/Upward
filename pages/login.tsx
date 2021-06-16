import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function Login() {
    return (
        <main className="container">
            <section className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <LoginForm />
            </section>
        </main>
    );
}

export default Login;