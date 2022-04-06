import logo from './logo.png';
import './App.css';

import Loader from './components/Loader/index';
import Home from './components/Home/index';
import Layout from './components/Layout/index';

import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? 
        <Loader logo={logo} /> 
        :
        <Layout>
          <Home logo={logo} />
        </Layout> 
      }
    </div>
  );
}

export default App;
