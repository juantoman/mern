import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import {useQuery} from 'react-query'

const DeleteMovie = () => {
    const deleteUser = event => {
      //event.preventDefault()

      if (
          window.confirm(
              `Do tou want to delete the movie ${props.id} permanently?`,
          )
      ) {
          api.deleteMovieById(props.id)
          window.location.reload()
      }
    }

    return (
        <button onClick={deleteUser()}>Delete</button>
    )
}

const MoviesList = () => {

  const {data, error, isError, isLoading } = useQuery('movies', api.getAllMovies)
    // first argument is a string to cache and track the query result
  if(isLoading){
      return <div>Loading...</div>
  }
  if(isError){
      return <div>Error! {error.message}</div>
  }

  return (
    <div>
      <table class="table" style={{marginTop:'100px'}}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">rating</th>
            <th scope="col">time</th>
            <th scope="col">delete</th>
            <th scope="col">update</th>
          </tr>
        </thead>
        <tbody>
          {
            data.data.data.map((movie, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{movie._id}</th>
                    <td>{movie.name}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.time}</td>
                    <td>
                      <DeleteMovie id={movie._id} />
                    </td>
                    <td><button>Update</button></td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MoviesList
