import './App.css'
import {Link, BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Support';
import MainHeader from './Components/MainHeader';
export default function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/About" element = {<About/>}/>
          <Route path="/Support" element = {<Support/>}/>
          <Route path="*" element = {<div>Can not found Page</div>}/>
        </Route>
      </Routes>
    </div>
  )
};
