const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const Token = await ethers.getContractFactory("AINRPToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log("AINRPToken deployed at:", token.address);

  const Registry = await ethers.getContractFactory("DIDRegistry");
  const registry = await Registry.deploy();
  await registry.deployed();
  console.log("DIDRegistry deployed at:", registry.address);

  const Logger = await ethers.getContractFactory("AuditLogger");
  const logger = await Logger.deploy();
  await logger.deployed();
  console.log("AuditLogger deployed at:", logger.address);

  const Staking = await ethers.getContractFactory("StakingManager");
  const staking = await Staking.deploy(token.address);
  await staking.deployed();
  console.log("StakingManager deployed at:", staking.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
