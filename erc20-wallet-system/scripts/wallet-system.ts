import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();

  // Step A — Load users
  const [user1, user2, user3] = await viem.getWalletClients();

  console.log("User1:", user1.account.address);
  console.log("User2:", user2.account.address);
  console.log("User3:", user3.account.address);

  // Step B — Connect token
  const tokenAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512" as const;
  const token = (await viem.getContractAt("MyToken", tokenAddress)) as any;

  // Step C — Balance check (LOGIN dashboard)
  console.log("User1 balance:", (await token.read.balanceOf([user1.account.address])).toString());

  // Step D — Transfer system (user1 sends 1000 tokens to user2)
  const txHash = await token.write.transfer([user2.account.address, 1000n]);
  console.log("Transfer tx:", txHash);

  // Step E — After transfer
  console.log("User1:", (await token.read.balanceOf([user1.account.address])).toString());
  console.log("User2:", (await token.read.balanceOf([user2.account.address])).toString());
}

main().catch(console.error);