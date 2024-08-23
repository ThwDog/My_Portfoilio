import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Arrow from './Arrow';

import Home from './section/Home.jsx';
import AboutMe from './section/AboutMe.jsx';
import MyWork from './section/MyWork.jsx';
import Contract from './section/Contract.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Arrow />
  </React.StrictMode>
);

reportWebVitals();
