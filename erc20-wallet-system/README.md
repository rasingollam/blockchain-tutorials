# 🟢 Project 3: ERC20 Wallet System

## What we built

A simulated wallet system with three users, an ERC20 token (`JivitaToken`), and a script that acts as a simple wallet dashboard — load users, check balances, and transfer tokens between them.

## What we learned

- ERC20 with OpenZeppelin: minting with initial supply, decimals, `balanceOf`, `transfer`
- Loading multiple wallet accounts with `viem.getWalletClients()`
- Connecting to a deployed contract with `viem.getContractAt()`
- Reading balances with `token.read.balanceOf()`
- Transferring tokens from a specific user with `token.write.transfer()` + `{ account }` override
- Displaying human-readable token amounts with `formatUnits`/`parseUnits` from viem
- Understanding the difference between raw units (wei-like) and display units (tokens)
- Simulating a login system: select wallet → check balance → transfer

## Directory structure

```
contracts/     Solidity source files (MyToken.sol)
scripts/       deploy.ts, wallet-system.ts, send-op-tx.ts
ignition/      Hardhat Ignition deployment modules
test/          Integration & unit tests
```

## How to use

1. **Compile** the contracts
2. **Deploy** `MyToken` to a local Hardhat network
3. **Update** the token address in `wallet-system.ts`
4. **Run** the wallet system script to see balances and transfer tokens

## Commands

```bash
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
npx hardhat run scripts/wallet-system.ts --network localhost
```
