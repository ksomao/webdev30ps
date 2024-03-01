// webdev30ps.js
const Web3 = require('web3');
const axios = require('axios');
const fs = require('fs');
const lodash = require('lodash');
const moment = require('moment');

class WebDev30ps {
  constructor(providerUrl) {
    this.web3 = new Web3(providerUrl);
  }

  async fetchDataFromBlockchain(address) {
    try {
      const balance = await this.web3.eth.getBalance(address);
      const transactions = await this.web3.eth.getTransactionCount(address);

      return {
        balance: this.web3.utils.fromWei(balance, 'ether'),
        transactions: transactions,
      };
    } catch (error) {
      throw new Error(`Error fetching blockchain data: ${error.message}`);
    }
  }

  async fetchDataFromExternalApi(apiUrl) {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching external data: ${error.message}`);
    }
  }

  processAndWriteData(data, filename) {
    const processedData = lodash.map(data, item => {
      // Your data processing logic
      return item;
    });

    fs.writeFileSync(filename, JSON.stringify(processedData, null, 2));
  }

  printTimestamp() {
    console.log(`Current timestamp: ${moment().format()}`);
  }
}

module.exports = WebDev30ps;
