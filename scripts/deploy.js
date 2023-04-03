const hre = require("hardhat");

async function main() {
  // Compile the contract
  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();
  
  // Wait for the contract to be deployed
  await bank.deployed();

  console.log("Bank deployed to:", bank.address);
}

// Call the main function to deploy the contract
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });