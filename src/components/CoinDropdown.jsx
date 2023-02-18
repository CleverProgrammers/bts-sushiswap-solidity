import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { Coins } from '../data/Coins.seed'

const CoinDropdown = ({
  setTransferCoinFrom,
  setTransferCoinTo,
  firstDropDrown,
  handleBalance,
  setFirstInput,
  setSecondInput,
}) => {
  const handleCoinSelection = async item => {
    if (firstDropDrown) {
      setTransferCoinFrom(item)
      setFirstInput('')
      setSecondInput('')
    } else {
      setTransferCoinTo(item)
      setFirstInput('')
      setSecondInput('')
    }
  }

  return (
    <div className='dropdown-coin-collection'>
      {Coins.map((item, index) => {
        return (
          <div
            key={index}
            className='dropdown-coin-item'
            onClick={() => {
              handleCoinSelection(item)
              handleBalance(item)
            }}
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
