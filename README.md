# Introduction to Solidity
A two-part introduction to solidity and basic front end for the club

### After the deploy.js script has been created
1. `npx hardhat node`
2. Open up metamask and add a network 
    * Usually at http://127.0.0.1:8545/
    * ChainID: 31337
    * ETH
3. Import the first account using the private key of the first account
4. `npx hardhat run --network localhost scripts/deploy.js`
5. `npx hardhat console --network localhost`

### At this point you should be in an interactive JS environment
1. `const BANK = await ethers.getContractFactory("Bank")`
2. `const bank = await BANK.attach(<contract>)`
3. `const P1ADDR = "acct0 public key"`
4. `const p1 = await ethers.getSigner(P1ADDR)`
5. `Call functions using await bank.functionName`
6. To pass a `msg.value` use `bank.functionName({ value: ethers.utils.parseEther("10")})`
