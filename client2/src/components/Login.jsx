import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import {Context} from './Context';

function Login() {

  const [SuccessLogin, setSuccessLogin] = React.useState();
  const [context, setContext] = React.useContext(Context);

  const history = useNavigate();

  React.useEffect(() => {
    const userInfo=JSON.parse(localStorage.getItem("userInfo"))
    const isAuthenticated=userInfo.isAuthenticated
    setSuccessLogin(isAuthenticated)
  });

  const onSuccessLogin = response => {
    //alert(response.profileObj.email);
    //setSuccessLogin(true)
    const userInfo= {
      isAuthenticated: true,
      email: response.profileObj.email
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    setContext(userInfo)
    history("/movies/list");
  };

  const onLogoutSuccess = response => {
    //alert("Logout!!!");
    //setSuccessLogin(false)
    const userInfo= {
      isAuthenticated: false,
      email: ''
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    setContext(userInfo)
    history("/");
  };

  const onFailure = response => {
    alert("Error!!!");
    setSuccessLogin(false)
  }

  return (
    <div>
      {! SuccessLogin ?
        <GoogleLogin
          clientId="422269930750-src3psqemmt1p6m8alujf9nvmook5c0d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccessLogin}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
        />
        :
        <GoogleLogout
          clientId="422269930750-src3psqemmt1p6m8alujf9nvmook5c0d.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
        />
      }
    </div>
  )
}

export default Login
