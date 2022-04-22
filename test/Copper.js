const { expect } = require("chai");

describe("Copper contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Copper = await ethers.getContractFactory("CopperBox");

    const copper = await Copper.deploy("copper");

    const balance = await copper.getbalance(1, 1);
    expect(await copper.getbalance(1, 1)).to.equal(0);
  });
});
