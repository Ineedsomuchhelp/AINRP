const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AuditLogger", function () {
  it("logs an action", async function () {
    const [agent] = await ethers.getSigners();
    const Logger = await ethers.getContractFactory("AuditLogger");
    const logger = await Logger.deploy();

    const dataHash = ethers.keccak256(ethers.toUtf8Bytes("data123"));
    const tx = await logger.logAction("test_action", dataHash);
    const receipt = await tx.wait();
    const event = receipt.logs.map(log => logger.interface.parseLog(log)).find(e => e.name === "ActionLogged");

    expect(event.args.agent).to.equal(agent.address);
  });
});
