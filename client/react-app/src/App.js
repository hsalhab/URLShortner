import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>URL Shortner</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Enter your URL" variant="outlined" />
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </form>
    </div>
  );
}

export default App;
