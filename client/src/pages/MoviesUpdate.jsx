import React, { Component, useState } from 'react'
import api from '../api'
import { useParams } from 'react-router';

import styled from 'styled-components'

const MoviesUpdate = () => {
  const { id } = useParams();

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

  const movieInicial = {
      id: id,
      name: 'PP',
      rating: '1',
      time: '10',
  }

  const [movie, setMovie] = useState(movieInicial);

  const handleChangeInputName = (event) => {
    const { name, value } = event.target;
    setMovie({ id: movie.id, name: value, rating: movie.rating, time: movie.time });
  }

  const handleChangeInputRating = (event) => {
    const { rating, value } = event.target;
    setMovie({ id: movie.id, name: movie.name, rating: value, time: movie.time });
  }

  const handleChangeInputTime = (event) => {
    const { time, value } = event.target;
    setMovie({ id: movie.id, name: movie.name, rating: movie.rating, time: value });
  }

  const handleUpdateMovie = async () => {
      const { id, name, rating, time } = movie
      const arrayTime = time.split('/')
      const payload = { name, rating, time: arrayTime }

      await api.updateMovieById(id, payload).then(res => {
          window.alert(`Movie updated successfully`)
      })
  }

  return (
    <Wrapper>
        <Title>Update Movie</Title>

        <Label>Name: </Label>
        <InputText
            type="text"
            value={movie.name}
            onChange={handleChangeInputName}
        />

        <Label>Rating: </Label>
        <InputText
            type="number"
            step="0.1"
            lang="en-US"
            min="0"
            max="10"
            pattern="[0-9]+([,\.][0-9]+)?"
            value={movie.rating}
            onChange={handleChangeInputRating}
        />

        <Label>Time: </Label>
        <InputText
            type="text"
            value={movie.time}
            onChange={handleChangeInputTime}
        />

        <Button onClick={handleUpdateMovie}>Update Movie</Button>
        <CancelButton href={'/movies/list'}>Cancel</CancelButton>
    </Wrapper>
  )
}

export default MoviesUpdate
