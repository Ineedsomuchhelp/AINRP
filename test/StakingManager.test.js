const { expect } = require("chai");

describe("StakingManager", function () {
  it("stakes and unstakes AINRPToken", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("AINRPToken");
    const token = await Token.deploy();
    await token.waitForDeployment();

    const tokenAddress = await token.getAddress();

    const Staking = await ethers.getContractFactory("StakingManager");
    const staking = await Staking.deploy(tokenAddress);
    await staking.waitForDeployment();

    const stakingAddress = await staking.getAddress();

    await token.approve(stakingAddress, ethers.parseEther("1000"));
    await staking.stake(ethers.parseEther("1000"));

    const stake = await staking.getStake(owner.address);
    expect(stake).to.equal(ethers.parseEther("1000"));

    await staking.unstake(ethers.parseEther("1000"));
    const unstaked = await staking.getStake(owner.address);
    expect(unstaked).to.equal(0);
  });
});
