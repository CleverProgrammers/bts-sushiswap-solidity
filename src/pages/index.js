import Head from 'next/head'
import React, { MouseEvent, useCallback, useEffect, useState } from 'react'

import { Stats } from '../data/Stats.seed'
import Header from '../components/Header'
import LeftCard from '../components/LeftCard'
import CoinDropdown from '../components/CoinDropdown'

import {
  swapEthToToken,
  getEthBalance,
  getTokenBalance,
  swapTokenToEth,
  hasValidAllowance,
  increaseAllowance,
  swapTokenToToken,
} from 'utils/queries'
import { toEth, toWei } from 'utils/ether-utils'
import { ethers } from 'ethers'

import { useAccount } from 'wagmi'

export default function Home() {
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [firstBalance, setFirstBalance] = useState('')
  const [secondBalance, setSecondBalance] = useState('')
  const [firstDropDrown, setFirstDropDown] = useState(false)
  const [transferCoinFrom, setTransferCoinFrom] = useState({
    name: 'BitCoin',
    value: 'BTC',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEz/miT5lRv5lBr4lBr3kxr4kxr4kxr3kxr9lxz937z6w4D4pkL++PH////+7Nf6tGH80Z1gLiRMAAAACnRSTlMADz9ehavC4f8dTtIi3wAAA9xJREFUeAG804mBBFEEBFA0VSX/hDeAnfM38wJwsyMeVxZAUiIJVF7h9hMeCeohIreriITeQMZeduozGzV0Ul9gtk2K0tcq5tJDRxD76fdL6NIt1XbLpbuYdi6oAQw7lBqSdqKhMej98U+vITXoYA2lcWWfc2gBfP/8ZipoagnbPuDUGvr8/se3AK3C/P/NfmNq2R+t5oH0OAhD4QQ3Amrc/7BbwraM/dtPMvumepo16EMNXUSklJ0qpVJ2Ko28gCwiXOqoy+gGkKSLxoDoB6DKW/r+MNgdMwYAoNINaO+P1t1BYQwCEZC7Afb+0P7REAxwBzgQkC4LOuGVu+IISFeG9IqFwKbN6ASBbg2iJURgdzM3IxQBnEMsBMhvaTOKItC1Rg7A5F+xBhHoSoEDaHKk4kWgaw3EIJUD9ejjQqAr+asA+VrsQaBr8ceAWlgulB16RYIgVZUzNcqw5mAWMDmVVrgwiKbBKufiimIYTUNyJTWXD7axBuDXcQsWIvRJ3fHdUNwHc77DgO3vBm7BHCtFy9HFp8b7EA2F42ewEOvSk1QBXIbnfQQ+IgR7nZAGIHBigQEQ3EXgNEY1CIJtEAJd7MNwAxiEEdiXDIpQmEYh0FXcFE4jEIifwPSYhyJA3lA0P5ahCDRvJFoe60gETD5ESDBe7yAgn61a86ej1R0G+KAqb9Ws7rNyhUqCLYYAIM3/w4AqqJgwA+IIAP8H9IggAKhkUI8tjsCXxnAxvDfY7kQB26GP4Y8bACQCawcFKeEGrAMSwb4gZXxQso5JBDUQhboBy6BEQE0+ZeCQYI4jcJ6JFGwPp2G1QLaAE6ZHiiOwU4l0h88wApeZijLUGm1xBHZiL4Yb1JiQNtv5WK/neIZ1pzM2n9RSrrse9lHYW7MUy4B2Xa0Y1pw+YzUIMMolhEEAAkXrLfo8KkbnxXNkLMha7fz/UtARTQoXYeWfotxaoCpIwMIAyYVYS1ENjY03aFDZx3B+NcgDiA+CRhDmAXxU6jSiAR7wj+upjGyL5sCjJWoAk+/xcnFWJK3p+f/N+XaZ/I/FVL8+DSX3u93qqkj4NEJoDbxcpsC+QP39v1b434lF7O129SBQ99YQmRlRfI8j+fcFGM760BLFEkWABu0zvaII5JBe+AoxhMCQdaptPAIggc6kOACBdGORiWq9jcA8YpXrBgIrsMwGlwcW3ywFMACMoGEAfG/eDq4AgAAYigGw/8Km6IsV2uuPDxp90umj1j+y3nJB2EzSbvDCqj7v98DBEw+PXDzz8dCJUi8wQvfcz4NHTz49epXsF8DnHcPXNU+/NX4H/P8BC2PKINdSx6oAAAAASUVORK5CYII=',
  })
  const [transferCoinTo, setTransferCoinTo] = useState({
    name: 'Ethereum',
    value: 'ETH',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAHlBMVEVHcExifutkgOxifutifutifurAy/b///+Bl+6hsvK9JwfqAAAABXRSTlMAuT/fhRZUC3MAAAOZSURBVHjaxZsBsuQgCEQDKoH7X3jr79QWOz9mBmhn7AvwQqNR0aMm5k5ErbUxWmtE1JmPL4k7tTFVo86fDz7e6IMQ3NuIqfOm6K62mIFppEW8ODyEgIffh0ADEoHh+4DVkey3sUCNwc/H1UH3cRGaflwMpH+LDTSWiz4V33Q9Qcr+U8Lj8SPlJ6cYQAB/v56nyAAIwPhDfgAMIADr384fAFFgLGDj73wACDAaoflH/gHYohmJR0p6PgBSJgxeN/+fDmAjrmUFYA6QSgHBBeAJcADBf0w8cpJnAIN/zi1rgANkTWjLDHAA3ISsAVcAhUYCFaYABwBGAlCBDgDUITIFOACeAi5UoAO4yimgggEOUDKB4J+QA9RMYDQBDoCnoFCBLsFT0AEDHCBdh72+Dr0HKK1QGUiAAxRM4JID5zsASXsAVOAUQJMecMkAl9RTwHkHJAJgOQ8IMGAOILkdO1CBDlA0IVsCEgWwRBH0TAVGASRRBIQmwEop8CJoaAWqWrkOW6oGb7KvOkWIViEXDXDz9a+sZgLHAfQS3QGmDBoD6CUDngK5LJ2CfhCwEHeAKYKGhgEBOyEHmCOsBJAXE/9vmcVNoKNlDJCZdCKLmtCCAB4+AuAIqwDEw0cAHMHeA8QqUF5Ib2X2PgUhAJEkgOttCmIWWBlgVRFqDWDEihBEKIV3ABqumg9AfJ8JQ1JLAAwXDqAvfSiFd4Ae8l/dhwhAvKfXD47NhHZfCi/Ci6ErIidwBH0N8P+4scjGILwccB/0HuC5YiOL0sz/WKY+zLMf/RsfuRWJTYbkNPvR9Uhia3Y+dPXhJrxIcGvGyWX5ZUhes/9Q+IQi3yJ5jjUPLxpuG1B6a/Q8JGfZF7H4AUWvNCnUQ+r0Z5E4ouERJ5ghzMdm5qCw1fan9mLBYKmj0l7doetNeLHcQSWXD2lE5ysFTR6Xt/o5nbj5Ls22LztyUGYqv2T57uWew+rDRTuO6+lw8cqGRalvRwBBKb4nAD+yB47qqymwewCtdq/5251Thtr3eO+YwAsMOgcYYcFXOAy7wNAPF9y+BFqWSB3qFQC+zdVrBLABLvrORSZadZnNAZACwMug1LJ24WMRLAC8DMACwKdkbArGrxWfyYY9QIDcK/b46wmg+DiBApfbN1zv3/rAYfcTj72PXBojb8xwtd0PnXY/9dr92A0TDUi0+8Hj5iefux+9LhX87BcX97Y8+v6n3/sfv29//v8HwRsN0ET2sBAAAAAASUVORK5CYII=',
  })
  const [secondDropDown, setSecondDropDown] = useState(false)

  useEffect(() => {
    if (secondDropDown && firstDropDrown) {
      setSecondDropDown(false)
    }
  }, [firstDropDrown])

  useEffect(() => {
    if (firstDropDrown && secondDropDown) {
      setFirstDropDown(false)
    }
  }, [secondDropDown])

  useEffect(() => {
    handleOutput()
  }, [transferCoinFrom, transferCoinTo, firstInput, secondInput])

  const currentAccount = useAccount().address

  const handleBalance = async item => {
    try {
      if (item.value === 'ETH') {
        if (firstDropDrown) {
          const balance = await getEthBalance(currentAccount)
          setFirstBalance(Number(balance).toFixed(2))
        } else if (secondDropDown) {
          const balance = await getEthBalance(currentAccount)
          setSecondBalance(Number(balance).toFixed(2))
        }
      } else {
        if (firstDropDrown) {
          const balance = await getTokenBalance(
            item.backendValue,
            currentAccount,
          )

          const fBal = ethers.utils.formatUnits(balance.toString(), 18)
          setFirstBalance(fBal.toString())
        } else if (secondDropDown) {
          const balance = await getTokenBalance(
            item.backendValue,
            currentAccount,
          )
          const fbal = ethers.utils.formatUnits(balance.toString(), 18)
          setSecondBalance(fbal.toString())
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSwap = async () => {
    try {
      if (firstInput === '') return
      if (transferCoinFrom.value === 'ETH' && transferCoinTo.value !== 'ETH') {
        const receipt = await swapEthToToken(
          transferCoinTo.backendValue,
          firstInput,
        )
        handleBalance()
        console.log(receipt)
      } else if (
        transferCoinFrom.value !== 'ETH' &&
        transferCoinTo.value === 'ETH'
      ) {
        console.log('swap token to eth')
        const result = await hasValidAllowance(
          currentAccount,
          transferCoinFrom.backendValue,
          firstInput,
        )
        console.log(result)
        if (result) {
          console.log('user has valid allowance')
          const receipt = await swapTokenToEth(
            transferCoinFrom.backendValue,
            firstInput,
          )
          console.log(receipt)
        } else {
          console.log('user has not valid allowance')
          const receipt = await increaseAllowance(
            transferCoinFrom.backendValue,
            firstInput,
          )
          if (receipt) {
            const receipt = await swapTokenToEth(
              transferCoinFrom.backendValue,
              firstInput,
            )
            console.log(receipt)
          }
        }
      } else {
        console.log('swap token to token')
        const result = await hasValidAllowance(
          currentAccount,
          transferCoinFrom.backendValue,
          firstInput,
        )
        if (result) {
          console.log('user has valid allowance')
          const receipt = await swapTokenToToken(
            transferCoinFrom.backendValue,
            transferCoinTo.backendValue,
            firstInput,
          )
          console.log(receipt)
        } else {
          console.log('user has not valid allowance')
          const receipt = await increaseAllowance(
            transferCoinFrom.backendValue,
            firstInput,
          )
          if (receipt) {
            const receipt = await swapTokenToToken(
              transferCoinFrom.backendValue,
              transferCoinTo.backendValue,
              firstInput,
            )
            console.log(receipt)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleOutput = () => {
    try {
      if (firstInput === '') return
      if (transferCoinTo.value !== 'ETH' && transferCoinFrom.value === 'ETH') {
        const output = toEth(toWei(firstInput), 14)
        setSecondInput(Number(output).toFixed())
      } else if (
        transferCoinFrom.value !== 'ETH' &&
        transferCoinTo.value === 'ETH'
      ) {
        const output = toEth(toWei(firstInput, 14))
        setSecondInput(Number(output))
      } else {
        const output = 1 * firstInput
        setSecondInput(Number(output))
      }
    } catch (error) {
      setSecondInput('0')
    }
  }

  return (
    <div className='wrapper'>
      <div className='main-container'>
        <Header />
        <div className='content-box'>
          <div className='cards-wrapper'>
            <LeftCard />
            <div className='selectcontainer card'>
              <div className='transfer-button top'>
                <h1 className='trade'>Swap xSwap</h1>
                <div className='transfer-container'>
                  <div className='transfer-balance'>
                    <input
                      className='transfer-balance-amount'
                      onChange={e => setFirstInput(e.target.value)}
                      value={firstInput}
                    />
                    <div className='transfer-balance-value'>$215.121</div>
                  </div>
                  <div
                    className='transfer-balance end'
                    onClick={() => setFirstDropDown(prevState => !prevState)}
                  >
                    <div className='transfer-dropdown'>
                      <img height='20px' src={transferCoinFrom.imageUrl} />
                      <span className='transfer-dropdown-title'>
                        {transferCoinFrom.value}
                      </span>
                      <span className='transfer-dropdown-icon'>
                        <svg viewBox='0 0 24 24' fill='#ffffff'>
                          <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                        </svg>
                      </span>
                    </div>
                    <div className='transfer-balance-value'>
                      Balance:{firstBalance || 0}
                    </div>
                  </div>
                  {firstDropDrown && (
                    <CoinDropdown
                      setTransferCoinTo={setTransferCoinTo}
                      setTransferCoinFrom={setTransferCoinFrom}
                      firstDropDrown={firstDropDrown}
                      handleBalance={handleBalance}
                      setFirstInput={setFirstInput}
                      setSecondInput={setSecondInput}
                    />
                  )}
                </div>
              </div>
              <div className='middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                  width='16'
                  height='16'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <div className='transfer-button bottom'>
                {' '}
                <div className='transfer-container'>
                  <div className='transfer-balance'>
                    <input
                      className='transfer-balance-amount'
                      onChange={e => setSecondInput(e.target.value)}
                      value={secondInput}
                    />
                    <div className='transfer-balance-value'>$234.785</div>
                  </div>
                  <div
                    className='transfer-balance end'
                    onClick={() => setSecondDropDown(prevState => !prevState)}
                  >
                    <div className='transfer-dropdown'>
                      <img height='20px' src={transferCoinTo.imageUrl} />
                      <span className='transfer-dropdown-title'>
                        {transferCoinTo.value}
                      </span>
                      <span className='transfer-dropdown-icon'>
                        <svg viewBox='0 0 24 24' fill='#ffffff'>
                          <path d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
                        </svg>
                      </span>
                    </div>
                    <div className='transfer-balance-value'>
                      Balance:{secondBalance || 0}
                    </div>
                  </div>
                  {secondDropDown && (
                    <CoinDropdown
                      setTransferCoinTo={setTransferCoinTo}
                      setTransferCoinFrom={setTransferCoinFrom}
                      firstDropDrown={firstDropDrown}
                      handleBalance={handleBalance}
                      setFirstInput={setFirstInput}
                      setSecondInput={setSecondInput}
                    />
                  )}
                </div>
                <div
                  className='button trade-button'
                  onClick={() => handleSwap()}
                >
                  Trade
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            {Stats.map(item => {
              return (
                <div className='box' key={item.price}>
                  <div className='title'>{item.price}</div>
                  <div className='subtitle'>{item.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
