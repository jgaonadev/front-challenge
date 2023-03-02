import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <Layout data={data} />;
};

export default App;
