import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from 'react-query'

import { ResponsiveAppBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages/Pages'

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
      refetchInterval: 1000,
    },
  },
});

function App() {
    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <ResponsiveAppBar/>
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
