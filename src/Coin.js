import React from 'react'

const Coin = ({name, image, sym, price, volume, change, high, low}) => {
  return (
    
    <div className="coin-container text-white text-[1.4rem] flex justify-center" >
        <table className="coin-row">
            <tbody className="coin-data ">
              <tr className='border-b-4 '>
                <img src={image} alt="" className="coin-img m-2 p-4 scale-75 h-[100px] " />
                <td className="coin-name px-8 w-[175px] text-left text-align w-40">{name}</td>
                <td className="coin-symbol px-8 w-[175px] text-left w-40">{sym}</td>
                <td className="coin-price px-8 w-[175px] text-left w-40">${price.toLocaleString()}</td>
                <td className="coin-volume px-8 w-[175px] text-left w-60">${volume.toLocaleString()}</td>

                {change < 0 ? (
                  <td className='text-red-600 px-8 w-[175px] text-left w-40'>{change.toFixed(2)}%</td>
                ) : (
                  <td className='text-green-600 px-8 w-[175px] text-left w-40'>{change.toFixed(2)}%</td>
                )}
                
                <td className='px-8 w-[175px] text-left w-40'>${high.toLocaleString()}</td>
                <td className='px-8 w-[175px] text-left w-40'>${low.toLocaleString()}</td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Coin