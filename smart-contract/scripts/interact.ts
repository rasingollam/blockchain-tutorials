import { network } from "hardhat";

async function main() {
  const { viem } = await network.create();
  const address = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";

  const hello = await viem.getContractAt("HelloWorld", address);

  console.log("Message:", await hello.read.message());

  await hello.write.setMessage(["Hello Sri Lanka Blockchain 🚀"]);

  console.log("Updated Message:", await hello.read.message());
}

main().catch(console.error);