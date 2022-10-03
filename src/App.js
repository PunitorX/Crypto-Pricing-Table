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

  const coinFilter = stats.filter(stat => stat.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app mx-auto bg-gradient-to-r bg-[#000] box-border p-8 text-center font-lato">
      <div className="coin-search flex  flex-col">
        <h1 className="coin-name my-2 py-2 text-lg tracking-wide text-[#fff] font-bold ">Search for a Currency</h1>
        <form className='py-2' >
          <input type="text" placeholder='Search' className="coin-input rounded-full"  onChange={handleChange}/>
        </form>
      </div>
      <table className='flex flex-col m-4 py-8'>
        {coinFilter.map(stat => {
          return (
              <Coin 
              key={stat.id} 
              name={stat.name}
              sym={stat.symbol}
              image={stat.image}
              price={stat.current_price}
              volume={stat.market_cap}
              change={stat.price_change_percentage_24h}
              high={stat.high_24h}
              low={stat.low_24h}
              />
          )
        })}
        </table>
    </div>
  );
}

export default App;