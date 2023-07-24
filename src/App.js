import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Footer from './components/Footer';

//pages
import Main from './pages/Home';
import Shoes from './pages/Shoes';
import Socks from './pages/Socks';


// <>
    //   <Navbar/>
    //   <Home />
    //   <Find />
    //   <Line/>
    //   <Blog />
    //   <Information/>
    //   <Footer />


const App = () => {


  return ( 
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/shoes' element={<Shoes/>}/>
          <Route path='/socks' element={<Socks/>} />
        </Routes>
        <Information/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

