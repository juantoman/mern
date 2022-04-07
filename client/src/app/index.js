import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from 'react-query'

import { ResponsiveAppBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, Presentation } from '../pages/Pages'
import {Context} from '../components/Context';

import 'bootstrap/dist/css/bootstrap.min.css'

//const queryClient = new QueryClient()

const emailcss = {
  color:'DodgerBlue',
  textAlign: 'center',
  fontSize: '0.7rem',
  padding: '2px',
  borderBottom: '1px solid gray',
  backgroundColor: 'lightgray'
}

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

function App() {


    const userInfo= {
      isAuthenticated: false,
      email: ''
    }

    if ( !localStorage.getItem("userInfo") ) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    const [context, setContext] = React.useState(JSON.parse(localStorage.getItem("userInfo")));
    //console.log(context.isAuthenticated)

    if ( !localStorage.getItem("userInfo") ) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    React.useEffect(() => {
      setContext(JSON.parse(localStorage.getItem("userInfo")))
    },[]);

    function PrivateRoute({ children }) {
      return context.isAuthenticated ? children : <Navigate to="/" />;
    }

    function PrivateRoute({ children }) {
      return context.isAuthenticated ? children : <Navigate to="/" />;
    }

    function UserNotAuthentified({ children }) {
      return context.isAuthenticated ? <Navigate to="/movies/list" /> : children;
    }

    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <Context.Provider value={[context, setContext]}>
            <ResponsiveAppBar/>
            <h3 style={emailcss}>{context.email}</h3>
            <Routes>
              <Route path="/movies/list" exact element={<PrivateRoute><MoviesList/></PrivateRoute>} />
              <Route path="/movies/create" exact element={<PrivateRoute><MoviesInsert/></PrivateRoute>} />
              <Route path="/movies/update/:id" exact element={<PrivateRoute><MoviesUpdate/></PrivateRoute>} />
              <Route path="/" exact element={<UserNotAuthentified><Presentation/></UserNotAuthentified>} />
            </Routes>
          </Context.Provider>
        </QueryClientProvider>
      </Router>
    )
}

export default App
