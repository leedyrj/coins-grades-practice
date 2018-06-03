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

//Declare value for each coin
const coinQuart = 25;
const coinDime = 10;
const coinNick = 05;
const coinPenny = 01;
let actualCash = '';

//function takes actualCash parameter of any number value
const moneyFunc = actualCash => {
    if (isNaN(actualCash)) {
        alert('Please enter a numerical value')
    } else {
        let cashToCoin = (actualCash * 100)
        const quartProd = Math.floor(cashToCoin/coinQuart);
        const quartMod = (cashToCoin % coinQuart);
        const dimeProd = Math.floor(quartMod/coinDime) ;
        const dimeMod = (quartMod % coinDime);
        const nickProd = Math.floor(dimeMod/coinNick);
        const nickMod = (dimeMod % coinNick);
        const pennyProd = Math.floor(nickMod/coinPenny);
        const pennyMod = (nickMod % coinPenny);
        return ('Quarters' + ': ' + quartProd + "; " + 'Dimes' + ': ' + dimeProd + ';' + ' Nickels' + ': ' + nickProd + "; " + 'Pennies' + ': ' + pennyProd)
    }
}
//store output to variable
const returnCoins = moneyFunc(actualCash);

//Create HTML elements using JavaScript!

//Create an article appeneded to empty div in HTML
const article = document.createElement('article');
const div = document.getElementById('dom-practice');
div.appendChild(article);

//Create an h1, p, form and text input and...
const headThree = document.createElement('h3');
const headText = document.createTextNode('Welcome!')
const para = document.createElement('p');
const paraText = document.createTextNode('Enter a cash value to have it converted to coins.');
const form = document.createElement('form');
const enterCash = document.createElement("input");
//...append to dom
headThree.appendChild(headText);
article.appendChild(headThree);
para.appendChild(paraText);
article.appendChild(para);
enterCash.setAttribute('id', 'enter-cash');
article.appendChild(form);
form.appendChild(enterCash);

//Create button and append to dom
const span = document.createElement('span');
const coinButton = document.createElement('button');
article.appendChild(span);
coinButton.innerHTML = 'ENTER';
coinButton.setAttribute('id', 'coin-button');
span.appendChild(coinButton);

//create submit event on form to call function and
//Create empty container and output function to dom
form.addEventListener('submit', (e) => {
    e.preventDefault();
    parseInt(enterCash.value);
    moneyFunc(enterCash.value);
    const outputCont = document.createElement('div');
    const funcOutput = document.createElement('h5');
    const funcText = document.createTextNode(returnCoins);
    outputCont.setAttribute('id', 'output-container');
    span.appendChild(outputCont);
    funcOutput.appendChild(funcText);
    outputCont.appendChild(funcOutput);
});
