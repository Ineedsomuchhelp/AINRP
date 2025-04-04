const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);
  const AINRPToken = await ethers.getContractFactory("AINRPToken");
  const token = await AINRPToken.deploy();
  await token.deployed();
  console.log("AINRPToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
