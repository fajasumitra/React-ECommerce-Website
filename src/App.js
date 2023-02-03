import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
