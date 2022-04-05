import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Works from './components/Works';
import WorkDetail from './components/WorkDetail';
import Contact from './components/Contact';
import { tecnoLogos, works } from './data';

function App() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white font-SpaceMono">
      <NavBar handleNav={handleNav} nav={nav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About tecnoLogos={tecnoLogos} />} />
        <Route path="/projects/*" element={<Works works={works} />} />
        <Route path="/projects/:id" element={<WorkDetail works={works} />} />
        <Route path="/contact" element={<Contact />}>
          {' '}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
