import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { Coins } from '../data/Coins.seed'

const CoinDropdown = ({
  setTransferCoinFrom,
  setTransferCoinTo,
  firstDropDrown,
  secondDropDown,
}) => {
  const handleCoinSelection = item => {
    if (firstDropDrown) {
      setTransferCoinFrom(item)
      console.log(item)
    } else {
      setTransferCoinTo(item)
    }
  }

  return (
    <div className='dropdown-coin-collection'>
      {Coins.map((item, index) => {
        return (
          <div
            key={index}
            className='dropdown-coin-item'
            onClick={() => handleCoinSelection(item)}
          >
            <img height='32px' src={item.imageUrl} />
            <span className='username'>
              {item.name}({item.value})
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default CoinDropdown
