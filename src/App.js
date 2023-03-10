import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
