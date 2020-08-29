import React from 'react';
import Home from './pages/Home';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  const styles = {
    App: {
      minHeight: "100vh",
      fontFamily: "Ubuntu",
    }
  };

  const theme = createMuiTheme({
    palette: {
      default: {
        main: '#EAF6FF',
      },
      primary: {
        main: '#EAF6FF',
      },
      secondary: {
        main: '#2A2A72',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={styles.App}>
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
