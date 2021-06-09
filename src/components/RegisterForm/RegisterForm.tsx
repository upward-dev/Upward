import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm() {
    
    const onSubmit = async (e:object) => {
        // e.preventDefault();  
        // await primsa db response
        console.log(e);
    };

    const validate = (values:object) => {
        return {};
    };

    const {handleSubmit, register} = useForm({
        // onSubmit,
        // validate
    });

    const firstName = register('firstName');
    const lastName = register('lastName');
    const userEmail = register('userEmail');
    const userPassword = register('userPassword');
    
    return(
        <form >
            <h1 className="text-center fs-3">Let's create your Upward account.</h1>
            <div className="my-3">
              {/*  <input {...firstName.input} placeholder="First Name" className="form-control" required/>
                {firstName.meta.touched && firstName.meta.error && (
                <span>{firstName.meta.error}</span>
                )}*/}
            </div>
            <div className="mb-3">
                <input {...lastName} placeholder="Last Name" className="form-control" required/>
               {/*  {lastName.meta.touched && lastName.meta.error && (
                 {<span>{lastName.meta.error}</span>}
                )}*/}
            </div>
            <div className="mb-3">
                <input {...userEmail} placeholder="Email Address" className="form-control" required/>
                 {/*{userEmail.meta.touched && userEmail.meta.error && (
                 {<span>{userEmail.meta.error}</span>}
                )}*/}
            </div>
            <div className="mb-3">
                <input {...userPassword} placeholder="Password" className="form-control" required/>
               {/*  {userPassword.meta.touched && userPassword.meta.error && (
                <   span>{userPassword.meta.error}</span>
                )}*/}
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
    );
}

export default RegisterForm;