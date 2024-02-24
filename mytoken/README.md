# MyToken

A simple token implementation to demonstrate the learnings of Metacrafters Solidity Beginner course.

## Description

This program is a simple smart contract written in Solidity. The contract have public variables that store the details about the coin (Token Name, Token Abbrv., Total Supply). It has a mapping to track balances of addresses. It has two functions, mint and burn. The mint function takes two parameters(an address and a value). It then increases the total supply by that number and increases the balance of the “sender” address by that amount. The burn function works the opposite of the mint function(ie, it will destroy tokens). It will take an address and value just like the mint functions. It will then deduct the value from the total supply and from the balance of the “sender”. The burn function have conditionals to make sure the balance of "sender" is greater than or equal to the amount that is supposed to be burned.

## Getting Started

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., MyToken.sol). Copy and paste the code from `MyToken.sol` in this repo into the newly created file in Remix.

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.4" (or another compatible version), and then click on the "Compile HelloWorld.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "HelloWorld" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the sayHello function. Click on the "HelloWorld" contract in the left-hand sidebar, and then click on the "sayHello" function. Finally, click on the "transact" button to execute the function and retrieve the "Hello World!" message.

## Authors

sanandmv
[@sanandmv7](https://twitter.com/sanandmv7)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details