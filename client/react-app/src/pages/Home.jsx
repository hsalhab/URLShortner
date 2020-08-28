import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      url: event.target.value
    });
  }

  handleSubmit = () => {
      console.log(this.state.url);
      // event.preventDefault();
  }

  render() {
    const styles = {
      Home: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      TextField: {
        margin: "3%",
        width: "50ch",
      },
      SubmitButton: {
        margin: "1%",
      },
      primaryDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10%",
      },
      
    };

    return (
      <div style={styles.Home}>
        <div style={styles.primaryDiv}>
          <h1>URL Shortner</h1>
          <TextField style={styles.TextField} id="outlined-basic" label="Enter your URL" variant="outlined" onChange={this.handleChange} />
          <Button style={styles.SubmitButton} variant="contained" color="primary" onClick={this.handleSubmit}>
                Shorten!
          </Button>
        </div>
        
      </div>
    );
  }
  
}

export default Home;
