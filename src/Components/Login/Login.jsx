import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ switchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);  // Check if the email state is being updated
    console.log('Password:', password); // Check if the password state is being updated
    swal({
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
        <input
          className={styles.inputField}
          placeholder='Enter your email'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <label>Password:</label>
        <input
          className={styles.inputField}
          placeholder='Enter password'
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button className={styles.btn} type="submit">Log In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className='btn btn-link' onClick={switchToSignUp}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
