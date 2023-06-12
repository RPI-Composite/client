import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import CalPage from './components/pages/CalPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/calpage' element={<CalPage />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
