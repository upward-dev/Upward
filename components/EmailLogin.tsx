import React from 'react'
import { useState } from 'react'
import styles from '../styles/EmailLogin.module.scss'

export default function EmailLogin({ onEmailSubmit, disabled }) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onEmailSubmit(email)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.emailForm}>
        <h2 className={styles.emailFormTitle}>Login</h2>
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
        <div className="mb-2"></div>
        <br />
        <div className={styles.emailFormButtonContainer}>
          <button
            disabled={disabled}
            type="submit"
            className={`btn ${styles.emailFormButton} active`}>
            Sign In
          </button>
        </div>
        <div className={styles.registerContainer}>
          New to Upward? <a href="/register">Register now</a>
        </div>
      </form>
    </>
  )
}
