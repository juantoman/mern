import React, { Component, useState, useEffect } from 'react'
import api from '../api'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

//

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
    <Wrapper>
        <Title>Update Movie</Title>

        <Label>Name: </Label>
        <InputText
            type="text"
            name="name"
            value={movie.name}
            onChange={gestionarCampo}
        />

        <Label>Rating: </Label>
        <InputText
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

        <Label>Time: </Label>
        <InputText
            type="text"
            name="time"
            value={movie.time}
            onChange={gestionarCampo}
        />

        <Button onClick={handleUpdateMovie}>Update Movie</Button>
        <CancelButton><Link to="/movies/list">Cancel</Link></CancelButton>
    </Wrapper>
  )
}

export default MoviesUpdate
