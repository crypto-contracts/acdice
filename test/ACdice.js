const { expect } = require("chai");

describe("ACDice contract", function () {
  let acDice;
  let copper;
  let monster;
  let owner;
  const npcRole = 3;
  const npcToken = 0;
  const base = 98;

  beforeEach(async function () {
    const ACDice = await ethers.getContractFactory("ACDice");
    const Copper = await ethers.getContractFactory("CopperBox");
    const Monster = await ethers.getContractFactory("Monster");
    [owner] = await ethers.getSigners();

    copper = await Copper.deploy("copper");
    await copper.deployed();
    monster = await Monster.deploy("Monster2", "mms2");
    await monster.deployed();
    acDice = await ACDice.deploy(copper.address, npcRole, npcToken, base);
    await acDice.deployed();

    copper.setRole(3, monster.address);
    await monster.claim(1, "Dragon", 1, 1, 1, 1, [1, 1, 1, 1, 1, 1]);
    await copper.mint(3, 1, 5000);
    await copper.mint(npcRole, npcToken, 5000);
  });

  describe("Gaming", function () {
    it("Monster's copper should change after win or lose", async function () {
      const result = await acDice.roll(3, 1, 50, 1024);
    });
  });
});
