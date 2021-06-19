import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
    const onSubmit = async (e: object) => {
        // e.preventDefault();
        // await primsa db response
        console.log(e);
    };

    const validate = (values: object) => {
        return {};
    };

    const {register, handleSubmit} = useForm({
        // onSubmit,
        // validate
    });

    const userEmail = register('userEmail');
    const userPassword = register('userPassword');

    return (

        <form  className="border rounded p-3 login-form">

            <h2 className="text-center fs-5 mb-4">Login</h2>
            <div className="mb-3">
                <input {...userEmail} placeholder="Email Address" className="form-control" required/>
             {/*   {userEmail.meta.touched && userEmail.meta.error && (
                <span>{userEmail.meta.error}</span>
                )}*/}
            </div>
            <div className="mb-3">
             {/*   <input {...userPassword} placeholder="Password" className="form-control" required/>
                {userPassword.meta.touched && userPassword.meta.error && (
                <span>{userPassword.meta.error}</span>
                )}*/}
            </div>

            <br/>
            <div className="d-grid gap-2 col-6 mx-auto rounded btn-secondary">
                <button type="submit" className="btn btn-lg active text-dark ">Sign In</button>
            </div>
            <div className="text-center my-2">
                New to Upward? <a href="/register">Register now</a>
            </div>
        </form>
    )
}

export default LoginForm;