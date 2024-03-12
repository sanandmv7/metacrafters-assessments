# SimpleBank

A simple bank implementation to demonstrate the learnings of Metacrafters Solidity Intermediate course.

## Description

This program is a simple smart contract written in Solidity. The contract have a mapping that tracks the balances of each address. It has two functions, deposit and withdrawBalance. The deposit function checks the amount is greater than zero and increases the balance by the deposit amount. The withdrawBalance function will check if the balance of the caller is greater than zero using assert statement. It will then deduct the value from the balance and transfer the amount to the caller. It will check if the transfer is successful and revert if it is not successful.

## Getting Started

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., MyToken.sol). Copy and paste the code from `SimpleBank.sol` in this repo into the newly created file in Remix.

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile SimpleBank.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "SimpleBank" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the available functions. Click on the "SimpleBank" contract in the left-hand sidebar, and then click on the function name. Finally, click on the "transact" button to execute the function and retrieve the result.

## Authors

sanandmv
[@sanandmv7](https://twitter.com/sanandmv7)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details