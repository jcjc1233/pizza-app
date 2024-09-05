import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './components/Home';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
     <HomePage/> 
      <h1>{message}</h1>
    </div>
  );
}

export default App;
