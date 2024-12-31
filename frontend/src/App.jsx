import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaddyVarietyForm from './pages/PaddyInputPage';
import VarietyResult from './pages/VarietyResults';
import VarietyPredictionHome from './pages/VarietyPredictionHome';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VarietyPredictionHome />} />
        <Route path="/variety-input" element={<PaddyVarietyForm />} />
        <Route path="/result" element={<VarietyResult />} />
      </Routes>
    </Router>
  );
}

export default App;
