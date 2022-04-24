const { ethers, upgrades } = require("hardhat");

async function main() {
  const copper = "0xfBA5A074223669450b306498fb6f7A1019A282bE";

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ACDice = await ethers.getContractFactory("ACDice");
  const acDice = await upgrades.deployProxy(ACDice, [copper, 3, 0, 98]);
  await acDice.deployed();

  console.log("ACDice deployed to:", acDice.address);
}

main();
