
// FUNCTION!!!

// document.write()
// console.log()
// alert()
// prompt()


// STRUCTURE

// function functionName(parameters){ code to excute } --> all on one line

// function functionName(parameters){  
//     code to excute  
// }

// function
function addTwoNumber(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

// Called/invoking a function: call it by with name() 
console.log(addTwoNumber(5, 3));

function sayHi() {
    let userName = prompt('What is your name?');

    if (userName == '') {
        alert("you didn't type a name...");
        userName = prompt("Please tell me your name");
    }

    console.log("The user's name is: " + userName);
    document.write("Hello and welcome to my page," + userName);

    return userName;
}

// Called/inveking 
// let userName = sayHi();
// console.log(userName);

function likesCookies() {
    let reponse = prompt('Do you like cookie?');

    if (reponse == 'yes') {
        alert("you're come to the right place!");
    } else if (reponse == 'no') {
        alert("What are you doing at a cookie shop website?");
    } else {
        alert("I'm not sure what that means....");
    }

    document.write(reponse);
    return reponse;
}

let reponse = likesCookies();

console.log(reponse);

