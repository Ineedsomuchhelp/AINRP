// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AuditLogger {
    event ActionLogged(address indexed agent, string action, uint256 timestamp, bytes32 dataHash);

    function logAction(string calldata action, bytes32 dataHash) external {
        emit ActionLogged(msg.sender, action, block.timestamp, dataHash);
    }
}
