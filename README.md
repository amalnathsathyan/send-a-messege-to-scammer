# Send A Message to Scammer

[![GitHub license](https://img.shields.io/github/license/amalnathsathyan/send-a-messege-to-scammer)](https://github.com/amalnathsathyan/send-a-messege-to-scammer/blob/main/LICENSE)

Send A Message to Scammer is a simple example of a Solidity smart contract and a JavaScript script using ethers.js to relay a message, making it appear as if it originates from a specific Ethereum address. This example is for educational purposes only and should not be used on the mainnet.

_In case your private keys and funds are stolen, and you want to put a message to the scammer, one possible way is to send them a transaction. But sometimes, you can't even access the wallet, and it may be draining within seconds as soon as some funds arrive. Here is an approach to do it using a new wallet and old wallet's private key._

## Prerequisites

- Node.js v14+ installed
- An Ethereum wallet (MetaMask or any other wallet that provides a private key)
- A Polygon Mumbai Testnet account with some test Matic tokens
- A Polygon Mumbai Testnet RPC endpoint URL (e.g., from [MaticVigil](https://maticvigil.com/))

## Getting Started

1. Clone the repository: 
git clone https://github.com/amalnathsathyan/send-a-messege-to-scammer.git
cd send-a-messege-to-scammer

2. Install the dependencies:

```npm install```

3. Create a `.env` file in the root folder of your project and add your private keys and project ID:

```ini
NEW_WALLET_PRIVATE_KEY=your_new_wallet_private_key
COMPROMISED_WALLET_PRIVATE_KEY=your_compromised_wallet_private_key
YOUR_PROJECT_ID=your_project_id
```

4. Compile the smart contract:

```bash
npx hardhat compile
```

5.Run the relay-message.js script to deploy the smart contract and relay the message:

```bash
npx hardhat run scripts/relay-message.js --network mumbai
```

## Customizing the Message


This section explains how users can customize the message sent to the scammer by modifying the `relay-message.js` file.


To set your own message, follow these steps:

1. Open the `relay-message.js` file in your preferred text editor.

2. Locate the following line:

```javascript
const message = "Your custom message here";
```
3. Replace the text within the double quotes with your own message.

4. Save the `relay-message.js` file.

5. Run the relay-message.js script again to deploy the smart contract and relay your updated message:

```bash
npx hardhat run scripts/relay-message.js --network mumbai
```

## Collaboration Invitation

Feel free to collaborate or check out my new project: [YTWeb3](https://github.com/amalnathsathyan/ytweb3.git). This project aims to provide an easy-to-use interface for interacting with the Web3 ecosystem through YouTube videos and tutorials.

You can also preview the project at: [https://ytweb3.vercel.app/](https://ytweb3.vercel.app/)

Any contributions, suggestions, or feedback are welcome!






