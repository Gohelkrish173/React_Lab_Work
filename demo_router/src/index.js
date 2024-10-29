import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LayoutPage from './Components Pages/LayoutPage';
import Home from './Components Pages/Home';
import About from './Components Pages/About';
import Contact from './Components Pages/Contact';
import Service from './Components Pages/Service';
import Help from './Components Pages/Help';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutPage/>}>
        <Route path="Home" element= {<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Service" element={<Service/>}/>
        <Route path="Help" element={<Help/>}/>
      </Route>
      <Route path="/H" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);