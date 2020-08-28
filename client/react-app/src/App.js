import React from 'react';
import Home from './pages/Home';

function App() {
  const styles = {
    App: {
      minHeight: "100vh",
      fontFamily: "Ubuntu",
    }
  };

  return (
    <div style={styles.App}>
      <Home></Home>
    </div>
  );
}

export default App;
