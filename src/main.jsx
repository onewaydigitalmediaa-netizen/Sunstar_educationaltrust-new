import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import './styles/premium.css';
import './styles/navigation.css';
import './styles/bangalore.css';
import './styles/about-career.css';
import './styles/home-carousel.css';
import './styles/brand-accuracy.css';
import './styles/reference-remake.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>
);
