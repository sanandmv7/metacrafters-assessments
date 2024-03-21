// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.17;

contract SimpleVoting {
    uint256 votesOfA;
    uint256 votesOfB;
    mapping(address => bool) private voted;

    // Function to vote for A
    function voteForA() public payable {
        require(!voted[msg.sender], "Already voted");
        voted[msg.sender] = true;
        votesOfA += 1;
    }

    // Function to vote for B
    function voteForB() public payable {
        require(!voted[msg.sender], "Already voted");
        voted[msg.sender] = true;
        votesOfB += 1;
    }

    // Function returns the number of votes so far for A and B respectively
    function checkVotes() public view returns(uint256, uint256) {
        return (votesOfA, votesOfB);
    }
}
