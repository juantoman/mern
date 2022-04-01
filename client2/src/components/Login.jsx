import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [SuccessLogin, setSuccessLogin] = React.useState(false);

  const history = useNavigate();

  const onSuccessLogin = response => {
    //alert(response.profileObj.email);
    setSuccessLogin(true)
    history("/movies/list");
  };
  
  const onLogoutSuccess = response => {
    alert("Logout!!!");
    setSuccessLogin(false)
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
