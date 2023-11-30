// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const account = await ethers.getSigner();

  console.log('root')

//bytes32
//  let merkleRoot = [ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Leaf1")),ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Leaf2"))];
// let merkleRoot = ethers.utils.keccak256(ethers.utils.solidityPack(['string'],['hello']));

let merkleRoot='0xcc086fcc038189b4641db2cc4f1de3bb132aefbd65d510d817591550937818c7'
console.log("MerkleRoot: ", merkleRoot)
//  let merkleProof = ethers.utils.defaultAbiCoder.encode(['address', 'uint256'], ['0x7b953190fb823a7f445fcfb5b621499f238c7787',2000])

//account and amount
let merkleProof = [
  ethers.utils.keccak256(ethers.utils.solidityPack(['address'], ['0x7b953190fb823a7f445fcfb5b621499f238c7787'])),
  ethers.utils.keccak256(ethers.utils.solidityPack(['uint256'], [200000000000000]))
];

// let merkleProof = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address', 'uint256'], ['0x7b953190fb823a7f445fcfb5b621499f238c7787a83e54ec1a4128a54e848cfb',2000]))
// let merkleProof =["0x0a83e21c65c2d3b120787fa73a2ebe44bb726b58a64f6ca04d162bf5a3ee9ac0","0x050bafc3fbff3f13ae92e34d22935ed341803bcf7a4b840ce8ba265bf765bf79"]
// console.log("merkleProof: ",merkleProof)

// let merkleProof =['0x8da9e1c820f9dbd1589fd6585872bc1063588625729e7ab0797cfc63a00bd950',
// '0x995788ffc103b987ad50f5e5707fd094419eb12d9552cc423bd0cd86a3861433']

let leaf ='0xdca3326ad7e8121bf9cf9c12333e6b2271abe823ec9edfe42f813b1e768fa57b'
console.log('22')
//Deploying Normal Contract
latestBlock = await ethers.provider.getBlock('latest');
currentTimestamp = latestBlock.timestamp;
MerkleTokenVesting = await ethers.getContractFactory('MerkleTokenVesting')
merkletokenvesting = await MerkleTokenVesting.deploy(
 
 currentTimestamp+3600,
//  merkleRoot
);
console.log('Merkleproof address: ', merkletokenvesting.address);
console.log(account.address)

let claimAward = await merkletokenvesting.verify(
merkleProof,
merkleRoot,
leaf,
0
)
  // let merkle = await merkleverify.Verify(
  //   proof,
  //   root,
  //   leaf,
  //   0
  // )


  //Deploying Upgradable Contract  
  // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
  // const greeter = await upgrades.deployProxy(Greeter,["Hello World"],{initializer: 'initialize'});
  // await greeter.deployed();
  // console.log("Greeter Upgradable Contract Address", greeter.address);

  //Upgrading Upgradable Contract  
  // const proxyAddress = '0x9539f8A71e8129623050ee117a92Efa6c5a23e5b';  
  // const Greeter = await ethers.getContractFactory("GreeterUpgrade");
  // const GreeterAddress = await upgrades.prepareUpgrade (proxyAddress,Greeter);
  // console.log("Greeter upgrade address :",GreeterAddress);

}

main();
