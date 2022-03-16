import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider} from 'react-query'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

function App() {
    return (
      <Router>
        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Routes>
              <Route path="/movies/list" element={<MoviesList/>} />
              <Route path="/movies/create" exact element={<MoviesInsert/>} />
              <Route path="/movies/update/:id" exact element={<MoviesUpdate/>} />
          </Routes>
        </QueryClientProvider>
      </Router>
    )
}

export default App
