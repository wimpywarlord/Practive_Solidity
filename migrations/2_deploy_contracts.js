const InfoStudent = artifacts.require("./InfoStudent.sol");

module.exports = function (deployer) {
    deployer.deploy(InfoStudent);
};
