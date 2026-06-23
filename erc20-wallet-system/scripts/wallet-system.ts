import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();
  const [user1, user2, user3] = await viem.getWalletClients();

  console.log("User1:", user1.account.address);
  console.log("User2:", user2.account.address);
  console.log("User3:", user3.account.address);
}

main().catch(console.error);