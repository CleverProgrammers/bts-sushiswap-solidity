import { BigNumber, ethers } from 'ethers'
import { contract, tokenContract } from './contract'
import { toEth } from './ether-utils'

export async function swapEthToToken(tokenName, amount) {
  try {
    let tx = { value: toWei(amount) }

    const contractObj = await contract()
    const data = await contractObj.swapEthToToken(tokenName, tx)

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

// export async function getEthBalance() {
//   try {
//     const contractObj = await contract()
//     const data = await contractObj.getEthBalance()
//     return toEth(data.toString())
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getEthBalance = async () => {
  // Check if ethers is available
  if (typeof ethers !== 'undefined') {
    // Use the current provider (MetaMask)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Get the current user's address
    const accounts = await provider.listAccounts()
    const userAddress = accounts[0]
    // Get the user's balance
    const balanceInWei = await provider.getBalance(userAddress)
    const balanceInEth = ethers.utils.formatEther(balanceInWei)
    return balanceInEth
  } else {
    throw new Error('Ethers is not available')
  }
}

export async function getTokenBalance(tokenName, address) {
  const contractObj = await contract()
  const balance = contractObj.getBalance(tokenName, address)
  return balance
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)

    const data = await tokenContractObj.allowance(
      owner,
      '0x87Ba4176Aec8418B0DA9C434A9dE85F6DbCc5995',
    )
    const allowance = BigNumber.from(data.toString())
    const amountWei = BigNumber.from(toWei(amount))

    console.log('allowance', allowance.toString())

    if (allowance.eq(0) || allowance.lt(amountWei)) {
      return false
    }

    return true
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToEth(tokenName, toWei(amount))

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount),
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.approve(
      '0x87Ba4176Aec8418B0DA9C434A9dE85F6DbCc5995',
      toWei(amount),
    )

    const receipt = await data.wait()
    console.log(receipt)
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString())
  return toWei.toString()
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e))
  return json?.reason || json?.error?.message
}
