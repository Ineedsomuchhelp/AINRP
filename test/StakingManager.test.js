const { expect } = require("chai");

describe("StakingManager", function () {
  it("stakes and unstakes AINRPToken", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("AINRPToken");
    const token = await Token.deploy();
    await token.deployed();

    const Staking = await ethers.getContractFactory("StakingManager");
    const staking = await Staking.deploy(token.address);
    await staking.deployed();

    await token.approve(staking.address, ethers.utils.parseEther("1000"));
    await staking.stake(ethers.utils.parseEther("1000"));
    const stake = await staking.getStake(owner.address);
    expect(stake).to.equal(ethers.utils.parseEther("1000"));
  });
});
