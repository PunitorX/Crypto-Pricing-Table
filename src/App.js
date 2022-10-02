import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [stats, setStats] = useState([]);
  const [search, setSearch] = useState('');

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

  const coinFilter = stats.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    // <div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // </div> 
    <>
    <div className="coin-app mx-auto bg-indigo-500">
      {/* <div className="coin-search">
        <h1 className="coin-name">Search for a currency</h1>
        <form >
          <input type="text" placeholder='Search' className="coin-input"  onChange={handleChange}/>
        </form>
      </div>
    {coinFilter.map(coin => {
      return (
        <Coin key={coin.id} />
      )
    })} */}
    </div>
    </>
  );
}

export default App;