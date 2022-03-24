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
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import BorderRadius from '../components/BorderRadius';
import Avatar from '@mui/material/Avatar';

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
        {/*<Box sx={{ flexGrow: 1 , m: 1 }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
            {
              data.data.data.map((movie, index) => {
                  return (
                    <Grid item>
                      <Card sx={{ maxWidth: 200, boxShadow: 5 }}>
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.blogs.es/89c7de/uncharted-cartel/1366_2000.jpeg"
                          alt="UNCHARTED"
                        /><IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          {
            data.data.data.map((movie, index) => {
              return (
                <Paper elevation={3}>
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                  <img src="https://i.blogs.es/89c7de/uncharted-cartel/1366_2000.jpeg" width="100px" />
                  <DeleteMovie id={movie._id} />
                  <UpdateMovie id={movie._id} />
                </Paper>
              )
            })
          }
        </Box>*/}
        <Box sx={{ flexGrow: 1 , m: 1 }}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Link style={{textDecoration:"none"}} to="/movies/create">
              <Box sx={{ border: 1, borderRadius: '5px' , m: "10px", p: "20px"}}>
                <Avatar>+</Avatar>
              </Box>
            </Link>
            {
              data.data.data.map((movie, index) => {
                let a="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + movie.name +"&size=64"
                return (
                  <a href={movie.name} target="_blank">
                    <Box sx={{ border: 1, borderRadius: '5px' , m: "10px", p: "20px"}}>
                      <Avatar variant="square" src={a}>{movie.name}</Avatar>
                    </Box>
                  </a>
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
