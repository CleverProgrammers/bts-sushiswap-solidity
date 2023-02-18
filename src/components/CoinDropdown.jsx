import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { toEth } from 'utils/ether-utils'

import { Coins } from '../data/Coins.seed'
import { useAccount } from 'wagmi'

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
  const currentAccount = useAccount().address

  const handleBalance = async item => {
    try {
      if (item.value == 'ETH') {
        const ethBalance = await getEthBalance()
        console.log()
        setFirstBalance(Number(ethBalance).toFixed(2))
        if (secondDropDown) {
          setSecondBalance(Number(ethBalance).toFixed(2))
        }
      } else if (firstDropDrown && item.value !== 'ETH') {
        const tokenBalance = await getTokenBalance(
          item.backendValue,
          currentAccount,
        )
        setFirstBalance(toEth(tokenBalance.toString()))
      } else if (secondDropDown && item.value !== 'ETH') {
        const tokenBalance = await getTokenBalance(
          item.backendValue,
          currentAccount,
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
