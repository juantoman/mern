import React, { useState, useEffect } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'

const MoviesInsert = () => {
  const [movie, setMovie] = useState({});
  const {isLoading, isError, error, mutate} = useMutation(api.insertMovie, {retry: 3})
  
  const gestionarCampo = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  const handleIncludeMovie = async () => {
    const { name, rating, time } = movie
    const arrayTime = time
    const payload = { name, rating, time: arrayTime }

    mutate(payload)
    window.alert(`Movie inserted successfully`)
    {/*await api.insertMovie(payload).then(res => {
        window.alert(`Movie inserted successfully`)
        setMovie({
          name:"",
          rating:"",
          time:""
        })
    })*/}
  }

  return (
    <div className='form-group'>
        <h1>Create Movie</h1>

        {/* <label>Name: </label>
        <input
            type="text"
            name="name"
            value={movie.name}
            onChange={gestionarCampo}
        />

        <label>Rating: </label>
        <input
            type="number"
            name="rating"
            step="0.1"
            lang="en-US"
            min="0"
            max="10"
            pattern="[0-9]+([,\.][0-9]+)?"
            value={movie.rating}
            onChange={gestionarCampo}
        />

        <label>Time: </label>
        <input
            type="text"
            name="time"
            value={movie.time}
            onChange={gestionarCampo}
        />

        <button onClick={handleUpdateMovie}>Update Movie</button>
        <button><Link to="/movies/list">Cancel</Link></button> */}
        <form class="row g-3">
          <div class="col-md-12">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" name="name" value={movie.name} onChange={gestionarCampo} />
          </div>
          <div class="col-md-12">
            <label for="inputRating" class="form-label">Rating</label>
            <input type="number" class="form-control" id="inputRating" name="rating" value={movie.rating} onChange={gestionarCampo} />
          </div>
          <div class="col-12">
            <label for="inputTime" class="form-label">Time</label>
            <input type="text" class="form-control" id="inputTime" name="time" value={movie.time} onChange={gestionarCampo} />
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-primary" onClick={handleIncludeMovie}>Create</button>
            <Link to="/movies/list"><button type="button" class="btn btn-primary">Cancel</button></Link>
          </div>
        </form>
    </div>
  )
}

export default MoviesInsert
