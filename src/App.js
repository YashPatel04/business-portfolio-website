import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact Component={Home}/>
      </Routes>
      <Footer />
      </Router>
      </>
    </div>
  );
}

export default App;
