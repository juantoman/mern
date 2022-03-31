import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from 'react-query'

import { ResponsiveAppBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages/Pages'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import 'bootstrap/dist/css/bootstrap.min.css'

//const queryClient = new QueryClient()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnmount: true,
      refetchOnReconnect: true,
      retry: true,
      staleTime: 1000,
      refetchInterval: 100,
    },
  },
});

const onSuccessLogin = response => {
  alert(response.profileObj.email);
};

const onLogoutSuccess = response => {
  alert("Logout!!!");
};

const onFailure = response => {
  alert("Error!!!");
};

function App() {
    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <ResponsiveAppBar/>
          <GoogleLogin
            clientId="422269930750-src3psqemmt1p6m8alujf9nvmook5c0d.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={onSuccessLogin}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
          <GoogleLogout
            clientId="422269930750-src3psqemmt1p6m8alujf9nvmook5c0d.apps.googleusercontent.com"
            buttonText="Logout with Google"
            onLogoutSuccess={onLogoutSuccess}
          />
          <Routes>
              <Route path="/movies/list" exact element={<MoviesList/>} />
              <Route path="/movies/create" exact element={<MoviesInsert/>} />
              <Route path="/movies/update/:id" exact element={<MoviesUpdate/>} />
          </Routes>
        </QueryClientProvider>
      </Router>
    )
}

export default App
