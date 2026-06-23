import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();
  const tokenAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const token = await viem.getContractAt("MyToken", tokenAddress);
  const [wallet1, wallet2] = await viem.getWalletClients();

  console.log("Account 1:", wallet1.account.address);
  console.log("Account 2:", wallet2.account.address);

  // Check balance
  let balance1 = await token.read.balanceOf([wallet1.account.address]);
  console.log("Balance 1:", balance1.toString());

  // Transfer tokens
  const txHash = await token.write.transfer([wallet2.account.address, 1000n]);
  console.log("Transferred 1000 tokens — tx:", txHash);

  // Check balances again
  balance1 = await token.read.balanceOf([wallet1.account.address]);
  let balance2 = await token.read.balanceOf([wallet2.account.address]);

  console.log("Balance 1:", balance1.toString());
  console.log("Balance 2:", balance2.toString());
}

main().catch(console.error);