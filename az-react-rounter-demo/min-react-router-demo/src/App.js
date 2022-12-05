import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export default App;
