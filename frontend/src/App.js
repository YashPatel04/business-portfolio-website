import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/contact';

function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Navbar />
      <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
