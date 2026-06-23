# Blockchain Tutorials

A collection of three projects that build on each other to teach Solidity smart contract development using **Hardhat 3** + **viem**.

## Projects

### 1. Hello Blockchain — Smart Contract
**`smart-contract/`**

A simple `HelloWorld` contract that stores and updates a message on-chain. Covers:
- Solidity basics: state variables, `public` getters, `view`/non-`view` functions
- Hardhat 3 project setup with the viem toolbox
- Writing deploy and interaction scripts with `viem.deployContract()` / `viem.getContractAt()`

### 2. My ERC20 Token
**`my-erc20-token/`**

An ERC20 token (`MyToken`) built with OpenZeppelin, minted to the deployer. Covers:
- ERC20 standard: `totalSupply`, `balanceOf`, `transfer`, `approve`, `allowance`
- Using OpenZeppelin as a dependency
- Initial supply minting with custom token name and symbol

### 3. ERC20 Wallet System
**`erc20-wallet-system/`**

A simulated wallet system with multiple users and token transfers. Covers:
- Loading wallet accounts with `viem.getWalletClients()`
- Reading balances and transferring tokens between accounts
- Formatting raw units to human-readable values with `formatUnits`/`parseUnits`
- Specifying the sender account in contract writes with `{ account }`

## How to run

Each project follows the same workflow:

```bash
cd <project-folder>
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
npx hardhat run scripts/interact.ts --network localhost   # or wallet-system.ts
```

Requires **Node.js 22.13+** and an Ethereum development node (Hardhat's built-in EDR is used by default).
