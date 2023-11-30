const { expect } = require("chai");
const { poll } = require("ethers/lib/utils");
const { waffle,ethers } = require("hardhat");
const { userInfo } = require("os");
const provider = waffle.provider;
const web3 = require("web3");


let capture;
let guessthenumbersecret;
describe('Greeter', () =>{

    const [owner, accountOne] = provider.getWallets();


    beforeEach( async () =>{
        Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy("Hello World");
        
        // Capture = await ethers.getContractFactory("Capture");
        // capture = await Capture.deploy();
        // console.log('capture Eth: ',capture.address)

      GuessTheNumberSecret =  await ethers.getContractFactory("GuessTheNumberSecret")
     guessthenumbersecret = await GuessTheNumberSecret.deploy();
     console.log("Guess the number Address: ", guessthenumbersecret.address)
})


    it('Should return set string', async () =>{
        //  await capture.isComplete();

   await guessthenumbersecret.GuessTheSecretNumberChallenge({value:'10000000000'});
   console.log("35")
   await guessthenumbersecret.isComplete();
   let inputGuess = await guessthenumbersecret.guess(10,{value:'10000000000'});




        // await expect(message).equal("Hello World");
    })

   
})