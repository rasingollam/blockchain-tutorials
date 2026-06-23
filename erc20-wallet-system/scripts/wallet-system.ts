import { network } from "hardhat";
import { formatUnits, parseUnits } from "viem";

const DECIMALS = 18;
const TOKEN = "JTK";

async function main() {
  const { viem } = await network.create();

  // Step A — Load users
  const [user1, user2, user3] = await viem.getWalletClients();

  console.log("User1:", user1.account.address);
  console.log("User2:", user2.account.address);
  console.log("User3:", user3.account.address);

  // Step B — Connect token
  const tokenAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3" as const;
  const token = (await viem.getContractAt("MyToken", tokenAddress)) as any;

  // Step C — Balance check (LOGIN dashboard)
  function showBalance(label: string, raw: bigint) {
    console.log(`${label} balance: ${formatUnits(raw, DECIMALS)} ${TOKEN}`);
  }

  showBalance("User1", await token.read.balanceOf([user1.account.address]));
  showBalance("User2", await token.read.balanceOf([user2.account.address]));
  showBalance("User3", await token.read.balanceOf([user3.account.address]));

  // Step D — Transfer system (user1 sends 10 tokens to user2)
  console.log("Transferring 10 tokens from User1 to User2...");
  const txHash = await token.write.transfer([user2.account.address, parseUnits("30", DECIMALS)]);
  console.log("Transfer tx:", txHash);

  // Step E — After transfer
  showBalance("User1", await token.read.balanceOf([user1.account.address]));
  showBalance("User2", await token.read.balanceOf([user2.account.address]));
  showBalance("User3", await token.read.balanceOf([user3.account.address]));
}

main().catch(console.error);