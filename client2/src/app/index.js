import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from 'react-query'

import { ResponsiveAppBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate, Presentation } from '../pages/Pages'
import {Context} from '../components/Context';

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

function App() {

    const [context, setContext] = React.useState(localStorage.getItem("userInfo"));
    console.log(JSON.parse({context}))

    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <Context.Provider value={[context, setContext]}>
            <ResponsiveAppBar/>
            <h3>{context}</h3>
            <Routes>
              <Route path="/movies/list" exact element={<MoviesList/>} />
              <Route path="/movies/create" exact element={<MoviesInsert/>} />
              <Route path="/movies/update/:id" exact element={<MoviesUpdate/>} />
              <Route path="/" exact element={<Presentation/>} />
            </Routes>
          </Context.Provider>
        </QueryClientProvider>
      </Router>
    )
}

export default App
