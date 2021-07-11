import React from 'react'
import { useState } from 'react'

export default function EmailLogin({onEmailSubmit, disabled}) {
    const [email,setEmail] = useState('');


    const handleSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onEmailSubmit(email);
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="border rounded p-3 login-form">
            <h2 className="text-center fs-2 mb-3">Login</h2>
            <div className="mb-3">
              <input
                placeholder="Email Address"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
            </div>
            <br />
            <div className="d-grid gap-1 col-6 mx-auto rounded btn-secondary">
              <button disabled={disabled} type="submit" className="btn btn-lg active text-dark ">
                Sign In
              </button>
            </div>
            <div className="text-center my-4">
              New to Upward? <a href="/register">Register now</a>
            </div>
          </form>
        </>
    )
}
