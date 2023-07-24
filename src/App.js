import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Find from './components/Find';
import Line from './components/Line';
import Blog from './components/Blog';




const App = () => {


  return ( 
    <>
      <Navbar/>
      <Home />
      <Find />
      <Line/>
      <Blog />
      
    </>
  );
}

export default App;

