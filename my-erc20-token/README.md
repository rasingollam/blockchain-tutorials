# 🟢 Project 2: My ERC20 Token

## What we built

An ERC20 token (`MyToken`) using OpenZeppelin, minted to the deployer on creation. Deployed and interacted with using Hardhat 3 + viem.

## What we learned

- ERC20 standard: `totalSupply`, `balanceOf`, `transfer`, `transferFrom`, `approve`, `allowance`
- Using OpenZeppelin contracts as a base
- Deploying an ERC20 with initial supply minted to `msg.sender`
- Reading balances and transferring tokens via scripts
- Getting wallet accounts with `viem.getWalletClients()`
- Sending contract writes with `token.write.transfer()`

## Directory structure

```
contracts/     Solidity source files
scripts/       Deploy & interaction scripts
ignition/      Hardhat Ignition deployment modules
test/          Integration & unit tests
```

## Commands

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
npx hardhat run scripts/interact.ts --network localhost
```
