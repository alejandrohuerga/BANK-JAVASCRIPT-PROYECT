/**
 * The account is an object with his variables and his methods
 * The user use prompt to insert instructions
 * The output in by the console.log() or alert.
 */

console.log("1.- Add money to the accounnt");
console.log("2.- Withdraw money of the account");
console.log("3.- Look the balance");
console.log("4.- Change Holder of the account");

var opcion = prompt("Insert one of the options that you can see in the console: ");




// Create the object "account"
var account = new Object(); 

// Properties of the object (account holder, balance, active)
account ={
    holder : "",
    balance : 0,
    active : true
}

function addMoney (quantity){
    var quantityNumber = Number(quantity);
    if(quantityNumber<0){
        return false;
    }else{
        account.balance =account.balance+quantityNumber;
        return true;
    }
    
}


function withdrawMoney(quantity){
    var quantityNumber = Number(quantity);
    if (quantityNumber > account.balance || quantityNumber<0){
        return false;
    }else{
        account.balance = account.balance - quantityNumber;
        return true;
    }

}

function lookBalance(){
    return balance;
}

function changeHolder(name){
    account.holder = name;
    return name;
}

do{
    switch (opcion){
        case "1":
            var addQuantity =prompt("Insert the quantity you are going to add: ");
            var addQuantityNumber =Number (addQuantity);
            addMoney(addQuantityNumber);
            alert("Quantity added correct to the balance: "+account.balance);
            break;
        case "2":
            var withdrawQuantity = Number(prompt("Insert the quantity you are go to withdraw of the account"));
            withdrawMoney(withdrawQuantity);
            alert("Quantity withdraw correct of the balance: "+account.balance);
            break;
        case "3":
            alert("The balance of your account is: "+account.balance);
            break;
        case "4":
            var newHolderName = prompt("Introduce the new name of the holder account");
            changeHolder(newHolderName);
            alert("The holder name changed sucefully! :" + account.holder);
            break;
        default:
            opcion = prompt("Insert one of the options that you can see in the console: ");
            break;
    }

    opcion = prompt("Insert one of the options that you can see in the console: ");
}while (opcion>0 && opcion <5);