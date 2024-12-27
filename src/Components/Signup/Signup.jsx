import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Signup.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// SignUp Component
const Signup = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Handle sign up logic here
    swal({
      icon: 'success',
      title: 'Sign Up Successful',
      text: 'Your account has been created successfully!'
    });
  };

  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input
          className={styles.inputField}
          placeholder='Enter your name'
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
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
          placeholder='Enter your password'
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button className={styles.btn} type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className='btn btn-link' onClick={switchToLogin}>Log in</span>
      </p>
    </div>
  );
};

export default Signup;
