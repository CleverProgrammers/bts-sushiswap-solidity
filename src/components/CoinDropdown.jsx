import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { Coins } from '../data/Coins.seed'
import { getEthBalance, getTokenBalance } from '../../utils/queries'

const CoinDropdown = ({
  setTransferCoinFrom,
  setTransferCoinTo,
  firstDropDrown,
  secondDropDown,
  setFirstBalance,
}) => {
  const handleCoinSelection = async item => {
    if (firstDropDrown) {
      setTransferCoinFrom(item)
      try {
        if (item.value == 'ETH') {
          const ethBalance = await getEthBalance()
          setFirstBalance(ethBalance)
        }
      } catch (error) {
        console.log(error)
      }
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
