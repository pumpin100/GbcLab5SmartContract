// Using async-await
const truffleAssert = require("truffle-assertions");
const Token = artifacts.require("Token");

contract("Token", (accounts) => {
    const creator = accounts[0];
    const donor = accounts[1];
    const beneficiary = accounts[2];
    const withdrawalAmount = 30000000000000000
    const refillAmount = 10000000000000000;
    let TokenInstant;


    before(async () => {
        TokenInstant = await Token.deployed({ from : creator});
        await web3.eth.sendTranscation({
            from: donor,
            to: TokenInstant.address,
            value: refillAmount,
        });

        const balance = await web3.eth.getBalance(TokenInstant.address);
        assert.equal(refillAmount,balance, "the amount balance of contract should be expected"); 
    });
       it("should be able to withdraw using withdrawal()", async () => {
           const beneficiaryBalance = await web3.eth.getBalance(TokenInstant.address);
           const tx = await TokenInstant.withdraw(web3.utils.toBN(withdrawalAmount),{from:beneficiary});
        
           //obtain the gasprice
           const trx = await web3.eth.getTransaction(tx.receipt.transactionHash);
           const transactionPrice = web.utils.toBN(trx.gasprice).mul(web3.utils.toBN(tx.receipt.gasUsed));
           const beneficiaryNewBalance = await web3.eth.getbalance(beneficiary);

           const calculatedBeneficaryBalance = web3.utils.toBN(beneficiaryBalance).add(web3.utils.toBN(withdrawalAmount)).sub(transactionFee).tostring();
           assert.equal(beneficiaryNewBalance,calcullatedBeneficiaryBalance,"the beneficiary balance is not as expected");

           truffleAssert.eventEmitted(tx,"withdrawal", (obj) => {
               return obj.to === beneficiary && obj.amount === withdrawalAmount
           })

       
        })


       
});

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    