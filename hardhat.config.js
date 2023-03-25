require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: "https://arb-mainnet.g.alchemy.com/v2/R5ymIsIe-f2HQVcjw9BR2s2h8Vb2z14y",
      accounts: ["NEW_WALLET_PRIVATE_KEY"]
    }
  }
};