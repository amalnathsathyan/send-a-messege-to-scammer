const { ethers } = require("ethers");
const fs = require("fs");

const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/v1/YOUR_PROJECT_ID");

const newWalletPrivateKey = "NEW_WALLET_PRIVATE_KEY";
const compromisedWalletPrivateKey = "COMPROMISED_WALLET_PRIVATE_KEY";
const compromisedWalletAddress = "COMPROMISED_WALLET_ADDRESS";
const scammerAddress = "SCAMMER_ADDRESS";

const newWallet = new ethers.Wallet(newWalletPrivateKey, provider);
const compromisedWallet = new ethers.Wallet(compromisedWalletPrivateKey, provider);

async function main() {
  // Deploy the RelayMessage smart contract
  const RelayMessage = JSON.parse(fs.readFileSync("./artifacts/contracts/RelayMessage.sol/RelayMessage.json"));
  const factory = new ethers.ContractFactory(RelayMessage.abi, RelayMessage.bytecode, newWallet);
  const relayMessageContract = await factory.deploy();
  await relayMessageContract.deployed();
  console.log("RelayMessage smart contract deployed at:", relayMessageContract.address);

  // Sign the message using the compromised wallet's private key
  const message = "Your message to the scammer";
    const messageHash = ethers.utils.hashMessage(message);
    const signature = await compromisedWallet.signMessage(message);
  
    // Call the relayMessage function of the smart contract from the new wallet
    const relayMessageTx = await relayMessageContract.relayMessage(message, compromisedWalletAddress, signature);
    await relayMessageTx.wait();
  
    console.log("Message relayed:", message);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
