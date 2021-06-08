import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';

function LoginForm() {

    const onSubmit = async (e: object) => {
        // e.preventDefault();
        // await primsa db response
        console.log(e);
    };

    const validate = (values: object) => {
        return {};
    };

    const {form, handleSubmit, values, pristine, submitting} = useForm({
        onSubmit,
        validate
    });

    const userEmail = useField('userEmail', form);
    const userPassword = useField('userPassword', form);
    
    return(
        <form  onSubmit={handleSubmit} className="border rounded p-3">
            <h1 className="text-center fs-3">Welcome Back!</h1>
            <h2 className="text-center fs-5 mb-4">Login to your Upward account.</h2>
            <div className="mb-3">
                <input {...userEmail.input} placeholder="Email Address" className="form-control" required/>
                {userEmail.meta.touched && userEmail.meta.error && (
                <span>{userEmail.meta.error}</span>
                )}
            </div>
            <div className="mb-3">
                <input {...userPassword.input} placeholder="Password" className="form-control" required/>
                {userPassword.meta.touched && userPassword.meta.error && (
                <span>{userPassword.meta.error}</span>
                )}
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
            </div>
            <div className="text-center my-2">
                New to Upward? <a href="/register">Register now</a>
            </div>
        </form>
    );
}

export default LoginForm;