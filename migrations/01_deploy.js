// Deploy contract
const CustomDex = artifacts.require('CustomDex')

module.exports = async function (deployer) {
  await deployer.deploy(CustomDex)
}
