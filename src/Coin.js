import React from 'react'

const Coin = ({name, image, sym, price, volume, change, high, low}) => {
  return (
    <div className="coin-container text-white text-[1.4rem] h-40" >
        <table className="coin-row table-auto ">
            
            <tbody className="coin-data ">
              <tr>
                <img src={image} alt="" className="coin-img m-2 p-4 scale-50" />
                <td className="coin-name p-8">{name}</td>
                <td className="coin-symbol p-8">{sym}</td>
                <td className="coin-price p-8">${price.toLocaleString()}</td>
                <td className="coin-volume p-8">${volume.toLocaleString()}</td>

                {change < 0 ? (
                  <td className='text-red-900 p-8'>{change.toFixed(2)}%</td>
                ) : (
                  <td className='text-green-800 p-8'>{change.toFixed(2)}%</td>
                )}
                
                <td className='p-8'>${high.toLocaleString()}</td>
                <td className='p-8'>${low.toLocaleString()}</td>
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Coin