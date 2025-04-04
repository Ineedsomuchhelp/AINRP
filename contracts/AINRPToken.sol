// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title AINRP Token - AI Identity & Non-Repudiation Protocol Token
contract AINRPToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 1e18; // 1 Billion tokens

    constructor() ERC20("AI Identity & Non-Repudiation Protocol", "AINRP") {
        _mint(msg.sender, MAX_SUPPLY);
    }
}
