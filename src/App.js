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
    <div className="coin-app mx-auto bg-gradient-to-r bg-[#343434] box-border p-8 text-center font-lato">
      <div className="coin-search flex  flex-col">
        <h1 className="coin-name my-2 py-2 text-lg tracking-wide text-[#ffc400] font-bold ">Search for a Currency</h1>
        <form className='py-2 flex justify-center' >

        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-[1.2rem] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 tracking-wide" placeholder="Search" required onChange={handleChange}/>

          {/* <input type="text" placeholder='Search' className="coin-input rounded-full pl-4"  onChange={handleChange}/> */}
        </form>
      </div>
      <div className="coin-container text-[1.4rem] flex justify-center" >
      <table className='flex flex-col m-4 py-8 text-white text-[1.4rem] '>
        <thead className='border-b-4 border-[#29b6f6] pb-4 w-100 text-left text-[#ffc400] text-[1.7rem] tracking-wide'>
          <th className='w-40'></th>
          <th className='w-[195px]'>Name</th>
          <th className='w-[125px]'>Symbol</th>
          <th className='w-[150px]'>Price</th>
          <th className='w-[200px]'>Volume</th>
          <th className='w-[150px]'>24 Hours</th>
          <th className='w-[175px]'>Highest</th>
          <th className='w-[175px]'>Lowest</th>
        </thead>
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
    </div>
  );
}

export default App;