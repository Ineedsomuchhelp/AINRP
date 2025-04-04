const { expect } = require("chai");

describe("AuditLogger", function () {
  it("logs an action", async function () {
    const [agent] = await ethers.getSigners();
    const Logger = await ethers.getContractFactory("AuditLogger");
    const logger = await Logger.deploy();
    await logger.deployed();
    const tx = await logger.logAction("test_action", ethers.utils.id("data123"));
    const receipt = await tx.wait();
    const event = receipt.events.find(e => e.event === "ActionLogged");
    expect(event.args.agent).to.equal(agent.address);
  });
});
