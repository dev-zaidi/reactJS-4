import React from 'react';
import { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import images from '../../assets/user.png'
import styles from './App.module.css'


// Main App Component
const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="container mt-5 p-3">
      <div className={styles.container}>
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-4">
        {isLogin ? (
        <Login switchToSignUp={switchToSignUp} />
      ) : (
        <Signup switchToLogin={switchToLogin} />
      )}
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={images} alt="" className={styles.image} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
