import React from 'react'

const Coin = ({name, image, sym, price, volume, change, high, low}) => {
  return (
    <div className="coin-container text-white">
        <div className="coin-row">
            <div className="coin-intro">
                <img src={image} alt="" className="coin-img" />
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{sym}</p>
            </div>
            <div className="coin-data">
                <div className="coin-price">${price}</div>
                <div className="coin-volume">${volume.toLocaleString()}</div>

                {change < 0 ? (
                  <div className='text-red-900'>{change.toFixed(2)}%</div>
                ) : (
                  <div className='text-green-800'>{change.toFixed(2)}%</div>
                )}
                
                <div>${high}</div>
                <div>${low}</div>
            </div>
        </div>
    </div>
  )
}

export default Coin