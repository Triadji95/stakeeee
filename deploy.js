const { ethers } = require("hardhat");

async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18);

    const BBOT = await ethers.getContractFactory("BBOTToken");
    const bbot = await BBOT.deploy(initialSupply);
    await bbot.deployed();
    console.log("BBOT deployed to:", bbot.address);

    const Staking = await ethers.getContractFactory("Staking");
    const staking = await Staking.deploy(bbot.address);
    await staking.deployed();
    console.log("Staking deployed to:", staking.address);

    const Airdrop = await ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(bbot.address);
    await airdrop.deployed();
    console.log("Airdrop deployed to:", airdrop.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});