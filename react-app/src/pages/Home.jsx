import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const myStyles = theme => ({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EAF6FF"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EAF6FF"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EAF6FF"
    },
    "& .MuiOutlinedInput-input": {
      color: "#EAF6FF"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#EAF6FF"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#EAF6FF"
    },
    "& .MuiInputLabel-outlined": {
      color: "#EAF6FF"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#EAF6FF"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#EAF6FF"
    }
  }
});

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
    const response = `URL is: ${this.state.url}, now send it to the server!`;
    alert(response);
    // event.preventDefault();
  }

  

  render() {

    const { classes } = this.props;
    const styles = {
      Home: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      TextField: {
        width: "50%",
      },
      SubmitButton: {
        marginBottom: "5%",
        marginTop: "2%"
      },
      primaryDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        color: "#EAF6FF",
        backgroundColor: "#232528",
width: "100%"
      },
      secondaryDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        color: "#232528",
        backgroundColor: "#EAF6FF",
        width: "100%"
      },
      p: {
        color: "#878E94",
        textAlign: "center",
        width: "70%",
        marginBottom: "5%",
        marginTop: "3%"
      },
      h1: {
        fontSize: "calc(30px + 2vmin)",
        margin: "1%",
        marginTop: "8%"
      }

    };

    return (
      <div style={styles.Home}>
        <div style={styles.primaryDiv}>
          <h1 style={styles.h1} >Toolong URL Shortner</h1>
          <p style={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <TextField className={classes.root} style={styles.TextField}  id="outlined-basic" label="Enter your URL" variant="outlined" onChange={this.handleChange} />
          <Button style={styles.SubmitButton} color="secondary" variant="contained" onClick={this.handleSubmit}>
            Shorten!
          </Button>
        </div>
        <div style={styles.secondaryDiv}>
          <h1 style={styles.h1} >Who Are We?</h1>
          <p style={styles.p}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>

        </div>

      </div>
    );
  }

}

export default withStyles(myStyles, { withTheme: true })(Home);
