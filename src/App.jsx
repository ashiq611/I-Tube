import {  useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
  useEffect(() => {

    fetch('https://i-tube.onrender.com/tags')
      .then(response => response.json())
      .then(json => console.log(json))

  }, [])
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
