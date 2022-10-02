import React from 'react'

const Coin = () => {
  return (
    <div className="coin-container">
        <div className="coin-row">
            <div className="coin-intro">
                <img src={image} alt="" className="coin-img" />
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{sym}</p>
            </div>
            <div className="coin-data">
                <div className="coin-price">{price}</div>
                <div className="coin-volume">${volume.toLocaleString()}</div>
            </div>

        </div>
    </div>
  )
}

export default Coin