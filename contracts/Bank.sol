// SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.9; //this is used so that solidity knows which version of the compiler to use

contract Bank {
    //mapping that simulates bank accounts
    //we tie a user address to their balance 
    mapping (address => uint256) private acct_balances;
    
    /**
     * @dev Emitted when a deposit is made to the contract.
     * @param depositor The address of the account making the deposit.
     * @param amount The amount of ether deposited.
     */
    event Deposit(address indexed depositor, uint256 amount);
    
    /**
     * @dev Emitted when a withdrawal is made from the contract.
     * @param withdrawer The address of the account making the withdrawal.
     * @param amount The amount of ether withdrawn.
     */
    event Withdraw(address indexed withdrawer, uint256 amount);

    /**
     * @dev Allows an account to deposit ether into the contract.
     * @notice The amount deposited must be greater than 0.
     */
    function deposit() public payable {
        require(msg.value > 0, "You need to deposit more than 0");
        acct_balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    /**
     * @dev Allows an account to withdraw ether from the contract.
     * @param amount The amount of ether to withdraw.
     * @notice The amount withdrawn must be greater than 0 and less than or equal to the account balance.
     */
    function withdraw(uint256 amount) public payable {
        require(amount > 0, "You cannot withdraw 0");
        require(amount <= acct_balances[msg.sender], "Insufficient balance");
        payable(msg.sender).transfer(amount);
        acct_balances[msg.sender] -= amount;
        emit Withdraw(msg.sender, msg.value);
    }

    /**
     * @dev Returns the balance of the calling account.
     * @return The balance of the calling account.
     */
    function getBalance() public view returns (uint256) {
        return acct_balances[msg.sender];
    }
}