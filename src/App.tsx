import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Agent from './pages/Agent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agent/:id" element={<Agent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;