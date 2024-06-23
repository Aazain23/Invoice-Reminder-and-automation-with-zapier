import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (response) => {
    try {
      const { data } = await axios.post('http://localhost:5000/auth/google', { token: response.tokenId });
      setAuthToken(data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={(response) => console.error('Login failed:', response)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
