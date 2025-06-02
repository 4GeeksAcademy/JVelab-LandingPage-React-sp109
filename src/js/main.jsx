import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Nav from './components/Nav';
import Hero from './components/Hero';
import CardVisualizer from './components/CardVisualizer';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Hero/>
    <CardVisualizer/>
    <Footer/>
  </React.StrictMode>,
)
