import inquirer from "inquirer";

type ansType = {
    userId : string,
    userPin : number,
    accountType: string,
    transactionType: string,
    amount: number
}

const answers:ansType = await inquirer.prompt([
{
    type: "input",
    name : "userId",
    message: "Kindly enter your User ID: "
},

{
    type: "input",
    name : "userPin",
    message: "Kindly enter your Pin : "
},
{
    type: "list",
    name : "accountType",
    choices:["Current Account", "Saving Account"],
    message: "Select your Account Type"
},
{
    type: "list",
    name : "transactionType",
    choices:["Fast Cash", "Cash WithDraw"],
    message: "Select your Transaction Type",
    when(answers) {
        return answers.accountType
    },
},
{
    type: "list",
    name : "amount",
    choices:[1000,5000,10000,25000,50000],
    message: "Select your Amount",
    when(answers) {
        return answers.transactionType==="Fast Cash"
    }
},   
    {
        type: "number",
        name : "amount",
        message: "Enter your Amount",
        when(answers) {
            return answers.transactionType==="Cash WithDraw"
        }
    }
])

if(answers.userId && answers.userPin){
    const balance  = Math.floor(Math.random() * 100000);
    console.log(`Balance Amount is ${balance}`);
    const enteredAmount = answers.amount;
    if(balance>= enteredAmount){
        const remainingAmount = balance - enteredAmount;
        console.log(`Your Remaing Balnce is ${remainingAmount}`);
        
    }else{
        console.log("Insuficirnt Balance");
        
    }
}

