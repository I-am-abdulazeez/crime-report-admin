import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  query,
  getDocs,
} from 'firebase/firestore';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

import { firestoreDb } from './libs';

const App = () => {
  const [crimes, setCrimes] = useState<QueryDocumentSnapshot<DocumentData>[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const fetchCrimes = async () => {
    const crimeQuery = query(collection(firestoreDb, 'crimes'));
    setIsLoading(true);
    await getDocs(crimeQuery)
      .then((snapshot) => {
        setCrimes(snapshot?.docs);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCrimes();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard crimes={crimes} />} />
    </Routes>
  );
};

export default App;
