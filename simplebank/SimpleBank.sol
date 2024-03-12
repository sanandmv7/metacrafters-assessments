// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.17;

contract SimpleBank {
    mapping(address => uint256) private balances;

    // Function to deposit funds
    function deposit() public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    // Function to withdraw the balance
    function withdrawBalance() public {
        assert(balances[msg.sender] > 0);
        uint256 amountToTransfer = balances[msg.sender];
        balances[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: amountToTransfer}("");
        if(!success) {
            revert("Transfer failed");
        }
    }
}
