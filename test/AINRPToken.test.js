const { expect } = require("chai");

describe("AINRPToken", function () {
  it("should deploy and assign the total supply to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("AINRPToken");
    const token = await Token.deploy();

    const totalSupply = await token.totalSupply();
    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(totalSupply);
  });
});
