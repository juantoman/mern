import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import {useQuery,useMutation} from 'react-query'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const DeleteMovie = props => {

    const {isLoadingD, isErrorD, errorD, mutate} = useMutation(api.deleteMovieById, {retry: 3})

    const deleteMovie = () => {
      if (
        window.confirm(
            `Do tou want to delete the movie ${props.id} permanently?`,
        )
    ) {
        mutate(props.id)
        //api.deleteMovieById(props.id)
        //window.location.reload()
    }
    }

    return (
        <Button size="small" onClick={deleteMovie}>Delete</Button>
    )
}

const UpdateMovie = props => {
  return (
    <Link to={{pathname: `/movies/update/${props.id}`}}><Button size="small">Update</Button></Link>
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
      {/*<table class="table" style={{marginTop:'100px'}}>
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
                    <td>
                      <UpdateMovie id={movie._id} />
                    </td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>*/}
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            {
              data.data.data.map((movie, index) => {
                  return (
                    <Grid item>
                      <Card sx={{ maxWidth: 200 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.blogs.es/89c7de/uncharted-cartel/1366_2000.jpeg"
                          alt="UNCHARTED"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {movie.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {movie.rating}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <DeleteMovie id={movie._id} />
                          <UpdateMovie id={movie._id} />
                        </CardActions>
                      </Card>
                    </Grid>
                  )
              })
            }
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default MoviesList
