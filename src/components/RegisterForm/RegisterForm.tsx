import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';

function RegisterForm() {
    
    const onSubmit = async (e:object) => {
        // e.preventDefault();  
        // await primsa db response
        console.log(e);
    };

    const validate = (values:object) => {
        return {};
    };

    const {form, handleSubmit, values, pristine, submitting} = useForm({
        onSubmit,
        validate
    });

    const firstName = useField('firstName', form);
    const lastName = useField('lastName', form);
    const userEmail = useField('userEmail', form);
    const userPassword = useField('userPassword', form);
    
    return(
        <form  onSubmit={handleSubmit}>
            <h1 className="text-center fs-3">Let's create your Upward account.</h1>
            <div className="my-3">
                <input {...firstName.input} placeholder="First Name" className="form-control" required/>
                {firstName.meta.touched && firstName.meta.error && (
                <span>{firstName.meta.error}</span>
                )}
            </div>
            <div className="mb-3">
                <input {...lastName.input} placeholder="Last Name" className="form-control" required/>
                {lastName.meta.touched && lastName.meta.error && (
                <span>{lastName.meta.error}</span>
                )}
            </div>
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
                <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Register</button>
            </div>
        </form>
    );
}

export default RegisterForm;