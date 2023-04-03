const { expect } = require("chai");

describe("Bank", function () {
    let Bank;
    let bank;
    let owner;
    let alice;
    let bob;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        Bank = await ethers.getContractFactory("Bank");
        [owner, alice, bob] = await ethers.getSigners();

        // Deploy the contract
        bank = await Bank.deploy();

        // Wait for the contract to be deployed
        await bank.deployed();
    });

    it("should have a zero balance initially", async function () {
        expect(await bank.getBalance()).to.equal(0);
    });

    it("should not allow users to deposit zero funds", async function () {
        await expect(bank.connect(alice).deposit({ value: 0 })).to.be.revertedWith("You need to deposit more than 0");
    });

  it("should not allow users to withdraw more than their balance", async function () {
    await bank.connect(alice).deposit({ value: 100 });
    await expect(bank.connect(alice).withdraw(150)).to.be.revertedWith("Insufficient balance");
  });

  it("should emit Deposit event on deposit", async function () {
    await expect(bank.connect(alice).deposit({ value: 100 }))
      .to.emit(bank, "Deposit")
      .withArgs(alice.address, 100);
  });
});
