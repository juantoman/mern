import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
};

export default function BorderRadius() {
  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar>N</Avatar>
        </Box>
        <Box sx={{ border: 1, borderRadius: '2px' , m: "10px", p: "10px"}}>
          <Avatar variant="square" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.myclassgame.es&size=64">N</Avatar>
        </Box>
      </Grid>
    </Container>
  );
}
