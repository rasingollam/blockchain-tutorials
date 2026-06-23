# 🟢 Project 1: Hello Blockchain (Smart Contract)

## What we built

A `HelloWorld` Solidity contract that stores a message on-chain, with functions to read and update it. Deployed and interacted with using Hardhat 3 + viem.

## What we learned

- Solidity basics: state variables, `public` getters, `view`/non-`view` functions
- Hardhat 3 project setup with the viem toolbox
- Writing a deploy script using `network.create()` and `viem.deployContract()`
- Writing an interaction script using `viem.getContractAt()`
- Reading contract state with `.read.*` and writing with `.write.*`
- Running scripts with `hardhat run` against a local network

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