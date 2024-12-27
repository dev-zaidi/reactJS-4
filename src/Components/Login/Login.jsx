import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({ switchToSignUp }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'Welcome back!'
    });
  };
  return (
    <div className={styles.form}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input className={styles.inputField} placeholder='Enter your email' type="email" name="email" required />
        <br /><br />
        <label>Password:</label>
        <input className={styles.inputField} placeholder='Enter password' type="password" name="password" required/>
        <br /><br />
        <button  className={styles.btn} type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className='btn btn-link' onClick={switchToSignUp}>Sign up</span>
      </p>
    </div>
  );
};


export default Login;
