import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import CalPage from './components/pages/CalPage';
import Housing from './components/pages/Housing';
import Dining from './components/pages/Dining';
import Dorm from './components/pages/Dorm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/pages/Catalog';
import CSTemplate from './components/pages/CSTemplate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/calpage' element={<CalPage />} />
          <Route path='/housing' element={<Housing />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/housing/:dormid' element={<Dorm />} />
          <Route path='/cstemplate' element={<CSTemplate />} />
          {/* <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
