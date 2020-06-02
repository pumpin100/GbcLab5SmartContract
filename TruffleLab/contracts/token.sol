/ SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Token {

    event withdrawal(address indexed to, uint amount);
    event Deposit(address indexed from, uint amount);







function withdrawaluint withdraw_amount) public {
    //check avalable amount 
    require(address(this).balance >= withdrawal, "Token: insufficient balanve");
    msg.sender.transfer(withdraw_amount);
    emit withdrawal(msg.sender, withdraw_amount);



}

function {} external payable {
    emit Deposit(msg.sender, msg.value);
}

function increaseAllowance(address spender, uint256 addedValue) public {
    return (Atomatically increases the allowance granted by spender to caller) 
    
    };

 function decreaseAllowance(address spender, uint256 addedValue)- pub;ic {
     return (Atomatically decreases the allowance granted by spender to caller)
     
     }

}