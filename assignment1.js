// Question 1

let x = "123";
x = Number(x);

console.log(x + 7);


// Question 2

let value = 0;

if (!value) {
    console.log("Invalid");
}


// Question 3

for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        continue;
    }

    console.log(i);
}


// Question 4

let arr = [1, 2, 3, 4, 5];

let result = arr.filter(function (num) {
    return num % 2 == 0;
});

console.log(result);


// Question 5

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

console.log(arr3);


// Question 6

function getDay(num) {
    switch (num) {
    case 1:
            return "Sunday";

     case 2:
            return "Monday";

     case 3:
            return "Tuesday";

     case 4:
            return "Wednesday";

     case 5:
            return "Thursday";

     case 6:
            return "Friday";

     case 7:
            return "Saturday";

    default:
            return "Invalid";
    }
}

console.log(getDay(2));



// Question 7

let words = ["a", "ab", "abc"];

let lengths = words.map(function (word) {
    return word.length;
});

console.log(lengths);



// Question 8

function checkNumber(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}

console.log(checkNumber(15));


// Question 9

let square = (num) => {
    return num * num;
};

console.log(square(5));

// Question 10

let person = {
    name: "John",
    age: 25
};

let { name, age } = person;

console.log(name);
console.log(age);



// Question 11

function sum(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(sum(1, 2, 3, 4));



// Question 12

let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve("Success");
    }, 3000);

});

promise.then(function (result) {
    console.log(result);
});



// Question 13

let numbers = [5, 8, 2, 10, 3];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }

}

console.log(max);



// Question 14

let person = {
    name: "Ali",
    age: 21,
    city: "Cairo"
};

let keys = Object.keys(person);

console.log(keys);



// Question 15

let sentence = "JavaScript is easy";

let result = sentence.split(" ");

console.log(result);





// Part 2


// Question 1
/*
forEach is used to loop through arrays.
for...of is used to loop through iterable objects.
for...of supports break and continue.
*/

// Question 2
/*
Hoisting means declarations are moved to the top.
TDZ is the period before let or const is initialized.
*/

// Question 3
/*
== compares value only.
=== compares value and type.
*/

// Question 4
/*
try catches errors.
catch handles the error.
It is useful with async/await.
*/

// Question 5
/*
Type conversion is done manually.
Coercion is done automatically by JavaScript.
*/