import React from 'react'

const Coin = ({name, image, sym, price, volume, change, high, low}) => {
  return (
            <tbody className="coin-data border-b-4 border-[#29b6f6]">
              <tr>
                <td className='w-40'>
                  <img src={image} alt="" className="coin-img m-2 p-4 scale-75 h-[100px] " /></td>
                <td className="coin-name  w-[195px] text-left ">{name}</td>
                <td className="coin-symbol  w-[125px] text-left ">{sym}</td>
                <td className="coin-price  w-[150px] text-left ">${price.toLocaleString()}</td>
                <td className="coin-volume  w-[200px] text-left ">${volume.toLocaleString()}</td>

                {change < 0 ? (
                  <td className='text-[#e53935]  w-[150px] text-left '>{change.toFixed(2)}%</td>
                ) : (
                  <td className='text-[#4caf50]  w-[150px] text-left '>{change.toFixed(2)}%</td>
                )}
                
                <td className=' w-[175px] text-left '>${high.toLocaleString()}</td>
                <td className=' w-[175px] text-left '>${low.toLocaleString()}</td>
              </tr>
            </tbody>
  )
}

export default Coin