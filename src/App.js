import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './modules/home/Home';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Login from './components/login/Login';
import Products from './components/hero/products/Products';
import StatCard from './components/stat-card/StatCard';
import FaetureCard from './components/faeture-card/FaetureCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />}>
          {/* <Route path='/products' element={<Products />} /> */}
        </Route>
        <Route path='/startcard' element={<StatCard />} />
        <Route path='/faeturecard' element={<FaetureCard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
