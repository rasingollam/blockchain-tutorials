import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();
  const hello = await viem.deployContract("HelloWorld");
  console.log("Contract deployed to:", hello.address);
}

main().catch(console.error);