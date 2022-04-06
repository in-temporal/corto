import logo from './logo.png';
import './App.css';

import Loader from './components/Loader/index';
import Home from './components/Home/index';
import About from './components/About/index';
import Layout from './components/Layout/index';
import Intemporal from './components/Intemporal/index';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  

  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={<Home logo={logo} />} />
            <Route path="/about" element={<About logo={logo} />} />
            <Route path="/intemporal" element={<Intemporal logo={logo} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
