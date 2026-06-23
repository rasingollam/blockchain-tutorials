import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();
  const token = await viem.deployContract("MyToken");

  console.log("Token deployed to:", token.address);
}

main().catch(console.error);