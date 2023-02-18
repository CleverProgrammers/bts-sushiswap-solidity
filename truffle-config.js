const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    inf_Moonbirds_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/kevin/github/key.env', 'utf-8'), "https://goerli.infura.io/v3/2e06d43344cb49479231009b28a4e829")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.16"
    }
  }
};
