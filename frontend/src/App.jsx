import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VarietyDetails from './pages/VarietyDetails';
import VarietyPredictionHome from './pages/VarietyPredictionHome';
import PaddyVarietyForm from './pages/PaddyInputPage';
import VarietyResult from './pages/VarietyResults';
import RiceVarietiesPage from './pages/Varieties';
import RiceVarietyMap from './pages/RiceVarietyMap';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VarietyPredictionHome />} />
        <Route path="/variety-input" element={<PaddyVarietyForm />} />
        <Route path="/result" element={<VarietyResult />} />
        <Route path="/variety-details/:varietyName" element={<VarietyDetails />} />
        <Route path="/varieties" element={<RiceVarietiesPage />} />
        <Route path="/map" element={<RiceVarietyMap />} />
      </Routes>
    </Router>
  );
}

export default App;
