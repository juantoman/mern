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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Tooltip from '@mui/material/Tooltip';
import FormDialog from '../components/FormDialog';


const MySwal = withReactContent(Swal)

const DeleteMovie = props => {

    const {isLoadingD, isErrorD, errorD, mutate} = useMutation(api.deleteMovieById, {retry: 3})

    const deleteMovie = () => {
      MySwal.fire({
        title: 'Delete movie!',
        text: `Do tou want to delete the movie ${props.id} permanently?`,
        icon: 'warning',
        confirmButtonText: 'Yes',
        showCancelButton: true,
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          mutate(props.id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      // if (
      //   MySwal.fire({
      //     title: <p>Hello World</p>,
      //     footer: 'Copyright 2018',
      //   }).then(() => {
      //     return MySwal.fire(<p>Shorthand works too2</p>)
      //   })
        // window.confirm(
        //     `Do tou want to delete the movie ${props.id} permanently?`,
        // )
    // ) {
        //alert(props.id)
        //mutate(props.id)
        //stopPropagation()
        //api.deleteMovieById(props.id)
        //window.location.reload()
    // }
    }

    return (
      //<MoreVertIcon sx={{ fontSize: 15 , position: 'absolute' , top: 3 , right: 0 }} onClick={deleteMovie}/>
      //<Button size="small" onClick={deleteMovie}>Delete</Button>
      <span onClick={deleteMovie}>Delete</span>
    )
}

const UpdateMovie = props => {
  return (
    <Link to={{pathname: `/movies/update/${props.id}`}}><Button size="small">Update</Button></Link>
  )
}

const MenuBM = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MoreVertIcon sx={{ fontSize: 15 , position: 'absolute' , top: 3 , right: 0 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={{pathname: `/movies/update/${props.id}`}} style={{textDecoration:"none",color:'black'}}>Update</Link></MenuItem>
        <MenuItem onClick={handleClose}><DeleteMovie id={props.id} /></MenuItem>
      </Menu>
    </>
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
        {/*
        <Box sx={{ flexGrow: 1 , m: 1 }}>
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
            <FormDialog/>
            {
              data.data.data.map((movie, index) => {
                let a="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + movie.name +"&size=64"
                return (
                    <Box key={movie._id} sx={{ border: 1, borderRadius: '5px' , m: "10px", p: "20px" , position: 'relative' }}>
                      <a href={movie.name} target="_blank">
                      <Tooltip title={movie.name} arrow>
                        <Avatar variant="square" src={a}>{movie.name}</Avatar>
                      </Tooltip>
                      </a>
                      <MenuBM id={movie._id}/>
                      {/* <MoreVertIcon sx={{ fontSize: 15 , position: 'absolute' , top: 3 , right: 0 }} /> */}
                    </Box>
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
