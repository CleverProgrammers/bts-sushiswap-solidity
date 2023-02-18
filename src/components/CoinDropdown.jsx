import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { toEth } from 'utils/ether-utils'

import { Coins } from '../data/Coins.seed'
import {
  getEthBalance,
  getTokenBalance,
  getTokenAddress,
} from '../../utils/queries'

const CoinDropdown = ({
  setTransferCoinFrom,
  setTransferCoinTo,
  firstDropDrown,
  setFirstBalance,
  setSecondBalance,
  secondDropDown,
}) => {
  const handleBalance = async item => {
    try {
      if (item.value == 'ETH') {
        const ethBalance = await getEthBalance()
        setFirstBalance(ethBalance)
      } else if (firstDropDrown && item.value !== 'ETH') {
        const tokenBalance = await getTokenBalance(
          item.backendValue,
          '0x87Ba4176Aec8418B0DA9C434A9dE85F6DbCc5995',
        )
        setFirstBalance(toEth(tokenBalance.toString()))
      } else if (secondDropDown && item.value !== 'ETH') {
        const tokenBalance = await getTokenBalance(
          item.backendValue,
          '0x87Ba4176Aec8418B0DA9C434A9dE85F6DbCc5995',
        )
        setSecondBalance(toEth(tokenBalance.toString()))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCoinSelection = async item => {
    if (firstDropDrown) {
      setTransferCoinFrom(item)
    } else {
      setTransferCoinTo(item)
      try {
        if (item.value == 'ETH') {
          const ethBalance = await getEthBalance()
          setSecondBalance(ethBalance)
          console.log(ethBalance)
        }
      } catch (error) {
        console.log(error)
      }
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
