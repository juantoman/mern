import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/movies/list" element={<MoviesList/>} />
                <Route exact path="/movies/create" element={<MoviesInsert/>} />
                <Route exact path="/movies/update/:id" element={<MoviesUpdate/>} />
            </Routes>
        </Router>
    )
}

export default App
