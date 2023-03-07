
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

function rateMyPage(){
    let rating = prompt("How many start would you rate my page? (1-5)"); // 3
    for(i = 1; i <= rating; i++){
        document.write('<img class="star" src="star.jpg" alt="Star">');
    }
}

// 0 | 0 < 3 ? T | excute | img star && i = 0 + 1 


// 1 | 1 <= 3 ? T | excute | img star && i = i(1) + 1
// 2 | 2 <= 3 ? T | excute | img star && i = i(2) + 1
// 3 | 3 <= 3 ? T | excute | img star && i = i(3) + 1
// 4 | 4 <= 3 ? F | break;


