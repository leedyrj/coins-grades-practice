//COINS TO CASH ASSIGNMENT

//set number of each coin
const piggyBank = {
    quarters: 73,
    dimes: 197,
    nickles: 521,
    pennies: 32
};

//initialize variable for output and for use in if statements
let dollarAmount = 0;
let quartCoin = '';
let dimeCoin = '';
let nickCoin = '';
let pennyCoin = '';

//get properties from piggyBank to access in if statements
let coins = Object.keys(piggyBank);

//for loop goes through property names, checks to see if they are a specific coin and does requried math
for (let i=0; i<coins.length; i++) {
    if (coins[i]==='quarters') {
        quartCoin = (piggyBank.quarters * .25)
    } else if (coins[i]==='dimes') {
        dimeCoin = (piggyBank.dimes * .1)
    } else if (coins[i]==='nickles') {
        nickCoin = (piggyBank.nickles * .05)
    } else if (coins[i]==='pennies') {
        pennyCoin = (piggyBank.pennies * .01)
    }
}

//assigns value to dollarAmount variable and console logs value
dollarAmount = (`$${quartCoin + dimeCoin + nickCoin + pennyCoin}`)
console.log(dollarAmount)

//CASH TO COINS ASSIGNMENT

// console.log(Math.floor(553/25))
// console.log(553%25)

const coinQuart = .25;
const coinDime = .1;
const coinNick = .05;
const coinPenny = .01;

const moneyFunc = cashToCoin => {
    const quartProd = Math.floor(cashToCoin/coinQuart);
    const quartMod = (cashToCoin % coinQuart);
    const dimeProd = Math.floor(quartMod/coinDime) ;
    const dimeMod = (quartMod % coinDime);
    const nickProd = Math.floor(dimeMod/coinNick);
    const nickMod = (dimeMod % coinNick);
    const pennyProd = Math.floor(nickMod/coinPenny);
    const pennyMod = (nickMod % coinPenny);
    // console.log(quartProd);
    // console.log(quartMod);
    // console.log(dimeProd);
    // console.log(dimeMod);
    // console.log(nickProd);
    // console.log(nickMod);
    // console.log(pennyProd);
    // console.log(pennyMod)
    return ('Quarters' + ': ' + quartProd + "; " + 'Dimes' + ': ' + dimeProd + ';' + ' Nickels' + ': ' + nickProd + "; " + 'Pennies' + ': ' + pennyProd)
}
const coinsFromCash = moneyFunc()
console.log(moneyFunc(3.48))





