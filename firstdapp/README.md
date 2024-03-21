# SimpleBank

A simple voting contract and frontend to demonstrate the learnings of Metacrafters Solidity Intermediate course.

## Description

This program is a simple voting DApp implemented using Solidity and JavaScript. The DApp allows the users to vote for either option A or option B and check the number of votes casted for both options. The simple voting smart contract has three functions: voteForA, voteForB and checkVotes. The voteForA function allows the user to vote for option A. Similarly, the voteForB function allows the user to vote for option B. The checkVotes function can be called to check the number of votes casted so far for option A and option B. The frontend allows the user to connect metamask wallet and interact with the simple voting smart contract.

## Getting Started

### Executing program

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: `npm i`
2. Open two additional terminals in your VS code
3. In the second terminal type: `npx hardhat node`
4. In the third terminal, type: `npx hardhat run --network localhost scripts/deploy.js`
5. Back in the first terminal, type `npm run dev` to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/

## Authors

sanandmv
[@sanandmv7](https://twitter.com/sanandmv7)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details