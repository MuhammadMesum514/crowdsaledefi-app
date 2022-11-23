async function main() {
  [owner, signer2, signer3] = await ethers.getSigners();

  SamCoin = await ethers.getContractFactory("SAMCOIN", owner);
  SamCoin = await SamCoin.deploy();

  Crowdsale = await ethers.getContractFactory("Crowdsale", owner);
  crowdSale = await Crowdsale.deploy(2, owner.address, SamCoin.address);

  await SamCoin.connect(owner).mint(
    crowdSale.address,
    ethers.utils.parseEther("10000")
  );

  console.log("Crowdsale:", crowdSale.address);
  console.log("SamCoin:", SamCoin.address);
  console.log("signer2:", signer2.address);
}

// npx hardhat run --network localhost scripts/deploy.js

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
