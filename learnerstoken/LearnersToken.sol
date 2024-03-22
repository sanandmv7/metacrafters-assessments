// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LearnersToken is ERC20, Ownable {
    constructor() ERC20("LEARNERS", "LRNS") Ownable(_msgSender()) {}

    // Allows the owner to mint tokens to a provided address
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Allows any user to burn the tokens
    function burn(uint256 value) public {
        _burn(_msgSender(), value);
    }
}