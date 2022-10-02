import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      setStats(res.data);
    })
    .catch(error => console.log(error));
  })

  const handleChange = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-name">Search a Player</h1>
        <form >
          <input type="text" placeholder='Search' className="coin-input"  onChange={handleChange}/>
        </form>
      </div>
 
    </div>
  );
}

export default App;