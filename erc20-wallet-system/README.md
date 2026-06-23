# 🟢 Project 3: ERC20 Wallet System

## What we built

A simulated wallet system with multiple users, an ERC20 token contract, and scripts to check balances and transfer tokens between accounts.

## What we learned

- Loading multiple wallet accounts with `viem.getWalletClients()`
- Connecting to an existing contract with `viem.getContractAt()`
- Reading balances with `token.read.balanceOf()`
- Transferring tokens with `token.write.transfer()`
- Simulating a login system (select wallet address → check balance → transfer)

## Directory structure

```
contracts/     Solidity source files
scripts/       Deploy, interact & wallet system scripts
ignition/      Hardhat Ignition deployment modules
test/          Integration & unit tests
```

## Commands

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
npx hardhat run scripts/wallet-system.ts --network localhost
```
