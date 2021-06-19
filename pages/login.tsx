import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

function Login() {
    return (
        <div className="page-margin-top">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;