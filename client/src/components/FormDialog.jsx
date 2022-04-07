import * as React from 'react';
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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

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
          />
          <TextField
            margin="dense"
            name="name"
            label="Rating"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            name="time"
            label="Time"
            type="number"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
