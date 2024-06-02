import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
