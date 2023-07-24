import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Information from './components/Information';
import Footer from './components/Footer';

//pages
import MainPage from './pages/MainPage';
import ShoesPage from './pages/ShoesPage';
import TshirtPage from './pages/TshirtPage';


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
          <Route path='/' element={<MainPage/>} />
          <Route path='/shoes' element={<ShoesPage/>}/>
          <Route path='/t-shirt' element={<TshirtPage/>} />
        </Routes>
        <Information/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

