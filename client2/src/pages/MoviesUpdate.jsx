import React, { useState, useEffect } from 'react'
import api from '../api'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

const MoviesUpdate = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

   useEffect(() => {
     async function fetchMyAPI() {
      let loadedMovie = await api.getMovieById(id)
      setMovie(loadedMovie.data.data)
    }
     fetchMyAPI()
   },[]);

  const handleUpdateMovie = async () => {
      const { _id, name, rating, time } = movie
      const arrayTime = time
      const payload = { name, rating, time: arrayTime }

      await api.updateMovieById(id, payload).then(res => {
          window.alert(`Movie updated successfully`)
      })
  }

  const gestionarCampo = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  return (
    <div className='form-group' style={{marginTop:'200px'}}>
        <h1>Update Movie</h1>

        <label>Name: </label>
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
        <button><Link to="/movies/list">Cancel</Link></button>
    </div>
  )
}

export default MoviesUpdate
