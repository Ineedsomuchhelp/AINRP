// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakingManager {
    IERC20 public ainrpToken;
    uint256 public constant MIN_STAKE = 1000 * 1e18;

    mapping(address => uint256) public stakes;

    event Staked(address indexed agent, uint256 amount);
    event Unstaked(address indexed agent, uint256 amount);

    constructor(address _ainrpToken) {
        ainrpToken = IERC20(_ainrpToken);
    }

    function stake(uint256 amount) external {
        require(amount >= MIN_STAKE, "Minimum stake not met");
        ainrpToken.transferFrom(msg.sender, address(this), amount);
        stakes[msg.sender] += amount;
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external {
        require(stakes[msg.sender] >= amount, "Not enough staked");
        stakes[msg.sender] -= amount;
        ainrpToken.transfer(msg.sender, amount);
        emit Unstaked(msg.sender, amount);
    }

    function getStake(address agent) external view returns (uint256) {
        return stakes[agent];
    }
}
