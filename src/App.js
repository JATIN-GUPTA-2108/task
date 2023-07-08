// function App() {
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import {
    Container,
    Grid,
    Paper,
    Typography,
    makeStyles,
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }));

  const App = () => {
    const classes = useStyles();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      axios
        .get('https://api.gyanibooks.com/library/get_dummy_notes')
        .then((response) => {
          setNotes(response.data[0]);
          
          // console.log(response.data[0])
          console.log(notes.id)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return (
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Dummy Notes
        </Typography>
        <Grid container spacing={2}>
          {/* {notes.map((note) => ( */}
            <Grid item xs={12} sm={6} md={4} key={notes.user}>
              <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                  {notes.title}
                </Typography>
                <Typography variant="body2">{notes.description}</Typography>
              </Paper>
            </Grid>
          {/* ))} */}
        </Grid>
      </Container>
    );
  };

  export default App;
