// import React, useState, useEffect
import React, { useState, useEffect } from 'react';
// import our css
import './index.css';
// import our components
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Button from './components/Button';

// render main page
function App() {
  return (
    <div className="app-container">
      <main className="main-container">
        <Welcome></Welcome>
        <Button></Button>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
