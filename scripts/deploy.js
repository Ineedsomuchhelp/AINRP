const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const AINRPToken = await hre.ethers.getContractFactory("AINRPToken");

  const token = await AINRPToken.deploy();

  await token.waitForDeployment();

  console.log("AINRPToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
