// the spread operator takes our array and "spreads" it out into individual elements, allowing us to use them as separate arguments 

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

const numersCombined = [...numbers, ...numbers2];
document.getElementById("demo").innerHTML = "" + numersCombined;



// the rest operator allows us to represent an indefinite number of arguments as an array. It is used in function definitions to allow for a variable number of arguments.

function rest(...args) {
    return args.reduce((total, current) => total + current, 0);
}

const sum = rest(1, 2, 3, 4, 5);
document.getElementById("demo").innerHTML += "<br>" + sum;

//
const customer = {
  id: 101,
  name: "Alex",
  account: {
    type: "Savings",
    balance: 5000
  }
};

const { name, account: { balance } } = customer;
document.getElementById("demo").innerHTML += `<br>Name: ${name}, Balance: ${balance}`;


//srrsy destructuring assignment allows us to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax for extracting data.

const array = [1,2,[3,400,500],6];
const [, , [, d, ], f] = array;
document.getElementById("demo").innerHTML += `<br>: ${d}, f: ${f}`;


