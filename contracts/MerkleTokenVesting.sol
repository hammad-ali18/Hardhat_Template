// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import {TokenVesting} from "./TokenVesting.sol";

import {Merkely} from "./Verify.sol";
contract MerkleTokenVesting is TokenVesting, Merkely{
  event Claimed( address account, uint256 amount);

  constructor(
    uint256 duration

  ) TokenVesting(duration)Merkely(){}


  function claimAward(
    bytes32[] calldata merkleProof,
    bytes32 root,
  bytes32 leaf, //node
    uint256 index
  ) external {

 
  Merkely.verify(merkleProof,root,leaf,index);
   
  }
}