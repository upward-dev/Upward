import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm({submitForm,submitLinkedin}) {

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
 
    
    return(
        <div className="border rounded p-3 text-center">
        <form  onClick={(e) => submitForm(e,userEmail)} >
            <h1 className="text-center fs-3">Welcome Back!</h1>
            <h2 className="text-center fs-5 mb-4">Login to your Upward account.</h2>
            <div className="mb-3">
                <input {...userEmail} placeholder="Email Address"  className="form-control" required/>
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
            <div className="d-grid gap-2 col-6 mx-auto">
                <button  type="submit" className="btn btn-primary">Submit</button>
                <p className="text-center">OR</p> 
            </div>
      
        </form>
        <button onClick={(e) => submitLinkedin(e,userEmail)} className="btn btn-secondary">Linkedin</button>
        <div className="text-center my-2">
                New to Upward? <a href="/register">Register now</a>
            </div>
        </div>

    );
}

export default LoginForm;