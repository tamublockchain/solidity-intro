// Import the Hardhat Runtime Environment
// Not needed for this contract but might be used in future
const hre = require("hardhat");

// An async function called main that deploys the contract on-chain
async function main() {
  // Compile the contract using ethers.js
  const Bank = await ethers.getContractFactory("Bank");
  // Deploy the contract on-chain
  const bank = await Bank.deploy();
  
  // Wait for the contract to be deployed
  await bank.deployed();

  // After deployment, log the address 
  console.log("Bank deployed to:", bank.address);
}

// Call the main function to deploy the contract
main()
  // If the main runs succesfully, exit the program with status code 0
  .then(() => process.exit(0))
  // Otherwise log the error and exit with status code 1
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });