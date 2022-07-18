import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

import { useStore } from './store';

const App = () => {
  const { fetchCrimes } = useStore();

  useEffect(() => {
    fetchCrimes();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
