import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import api from '../api'
import { useMutation } from 'react-query'
import { useParams } from 'react-router';
import Swal from 'sweetalert2'

const UpdateDialog = props => {
  const [open, setOpen] = React.useState(false);

  const id = props.id;
  const [movie, setMovie] = useState({});
  const {isLoading, isError, error, mutate} = useMutation(api.updateMovieById, {retry: 3})

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

      mutate({id:id,payload:payload})
      //window.alert(`Movie updated successfully`)
      // await api.updateMovieById(id, payload).then(res => {
      //     window.alert(`Movie updated successfully`)
      // })
      Swal.fire(
        'Saved!',
        'Movie updated successfully.',
        'success'
      )
      setOpen(false);
  }

  const gestionarCampo = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      {/*<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>*/}

      <span onClick={handleClickOpen}>Update</span>


      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Movie dates...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Movie name"
            type="text"
            fullWidth
            variant="outlined"
            value={movie.name}
            onChange={gestionarCampo}
          />
          <TextField
            margin="dense"
            name="rating"
            label="Rating"
            type="number"
            fullWidth
            variant="outlined"
            value={movie.rating}
            onChange={gestionarCampo}
          />
          <TextField
            margin="dense"
            name="time"
            label="Time"
            type="number"
            fullWidth
            variant="outlined"
            value={movie.time}
            onChange={gestionarCampo}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateMovie}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateDialog