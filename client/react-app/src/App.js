import React from 'react';
import Home from './pages/Home';

function App() {
  const styles = {
    App: {
      backgroundColor: "#EBEBD3",
      minHeight: "100vh",
      fontFamily: "Ubuntu",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "#3C3C3B"
    }
  };

  return (
    <div style={styles.App}>
      <Home></Home>
    </div>
  );
}

export default App;
