webdev30ps

A Node.js module for solving various devops tasks using web3 technology.

Installation

npm install webdev30ps

Usage

const WebDev30ps = require('webdev30ps');

const webdev30ps = new WebDev30ps('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY');

async function run() {
  try {
    console.log('Fetching blockchain data...');
    const blockchainData = await webdev30ps.fetchDataFromBlockchain('0x5FbDB2315678afecb367f032d93F642f64180aa3');
    console.log('Blockchain data:', blockchainData);

    console.log('Fetching external data...');
    const externalData = await webdev30ps.fetchDataFromExternalApi('https://jsonplaceholder.typicode.com/todos');
    console.log('External data:', externalData);

    console.log('Processing and writing data to output.json...');
    webdev30ps.processAndWriteData({ blockchainData, externalData }, 'output.json');

    console.log('Printing current timestamp...');
    webdev30ps.printTimestamp();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
