require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
  },
  path: {
    // artifacts: "./client/src/artifacts",
    artifacts: "./artifacts/contracts",
  },
};
