
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
