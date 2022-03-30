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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
    handleClose()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMovie({})
  };
  

  return (
    <div>
      {/*<Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>*/}

        <Tooltip title="New movie" arrow>
          <Box sx={{ border: 1, borderRadius: '5px' , m: "10px", p: "20px"}} onClick={handleClickOpen}>
            <Avatar sx={{ bgcolor: 'lightblue' }}>+</Avatar>
          </Box>
        </Tooltip>

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
          <Button onClick={handleIncludeMovie}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
