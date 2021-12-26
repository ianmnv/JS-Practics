'use strict';

// // LECTURE Data types

// let isIsland = 'Vancouver';
// let language;

// let country = 'Canada';
// language = 'En / Fr';
// let population = 38000000;

// console.log(country, language, population);


// // // CODING CALLENGE #1

// let markHeight = 1.69;
// let markWeight = 78;

// let johnHeight = 1.95;
// let johnWeight = 92;

// let bmiMark = markWeight / markHeight ** 2;
// let bmiJohn = johnWeight / (johnHeight ** 2);
// console.log(bmiMark, bmiJohn);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// // // CODING CHALLENGE #2
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`)
// } else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`)
// }


// markHeight = 1.88;
// markWeight = 95;

// johnHeight = 1.76;
// johnWeight = 85;

// bmiMark = markWeight / markHeight ** 2;
// bmiJohn = johnWeight / (johnHeight ** 2);
// console.log(bmiMark, bmiJohn);

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// // // CODING CHALLENGE #2
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is than John's${bmiJohn}`)
// } else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`)
// }


// // // CODING CHALLENGE #3

// let avgDolph = (96 + 108 + 89) / 3;
// let avgKoa = (88 + 91 + 110) / 3;

// console.log(`Dolphins ${avgDolph} , Koalas ${avgKoa}`)

// if (avgDolph > avgKoa) {
//     console.log(`Dolphins wins by ${avgDolph - avgKoa} points!`)
// } else if (avgKoa > avgDolph) {
//     console.log(`Kaoalas wins by ${avgKoa - avgDolph} points!`)
// } else {
//     console.log(`It's a draw!!`)
// } // Data 1


// avgDolph = (97 + 112 + 101) / 3;
// avgKoa = (109 + 95 + 123) / 3;
// const minimumScore = 100;

// console.log(`Dolphins ${avgDolph} , Koalas ${avgKoa}`)

// if ((avgDolph > avgKoa) && avgDolph >= minimumScore) {
//     console.log(`Dolphins wins by ${avgDolph - avgKoa} points!`)
// } else if ((avgDolph > avgKoa) && avgDolph <= minimumScore) {
//     console.log(`Dolphins won to Koalas but they have less than 100 points!`)
// } else if ((avgKoa > avgDolph) && avgKoa >= minimumScore) {
//     console.log(`Koalas win by ${avgKoa - avgDolph} points!`)
// } else if ((avgKoa > avgDolph) && avgKoa <= minimumScore) {
//     console.log(`Koalas won to Dolphins but they have less than 100 points!`)
// } else {
//     console.log('Nobody won! Sad news!')
// } // Bonus Data 1


// avgDolph = (97 + 112 + 101) / 3;
// avgKoa = (109 + 95 + 106) / 3;

// console.log(`Dolphins ${avgDolph} , Koalas ${avgKoa}`)

// if ((avgDolph > avgKoa) && avgDolph >= minimumScore) {
//     console.log(`Dolphins wins by ${avgDolph - avgKoa} points!`)
// } else if ((avgDolph > avgKoa) && avgDolph <= minimumScore) {
//     console.log(`Dolphins won to Koalas but they have less than 100 points!`)
// } else if ((avgKoa > avgDolph) && avgKoa >= minimumScore) {
//     console.log(`Koalas win by ${avgKoa - avgDolph} points!`)
// } else if ((avgKoa > avgDolph) && avgKoa <= minimumScore) {
//     console.log(`Koalas won to Dolphins but they have less than 100 points!`)
// } else {
//     console.log(' It is a draw! Nobody won!')
// } // Bonus Data 2


// Switch statement

// let weather = 'cold';

// switch (weather) {
//     case 'hot':
//         console.log('Use shorts');
//         break;
//     case 'warm':
//         console.log('Lets wear something fancy');
//         break;
//     case 'cold':
//         console.log('Wear something warm bro bzzz');
//         break;
//     case 'rainy':
//         console.log('Dont forget your unmbrella!');
//         break;
//     default:
//         console.log('Dont know what to wear o.0');
// };

// // LECTURE SWITCH STATEMENT

// const language = 'Spanish';

// switch (language) {
//     case 'English':
//         console.log('Its on the third place');
//         break;
//     case 'Chinise':
//         console.log('Most number of native speakers!');
//         break;
//     case 'Spanish':
//         console.log('Second language');
//         break;
//     case 'Arabic':
//         console.log('Number fourth');
//         break;
//     default:
//         console.log('Still good one tho!');
//         break;
// }

// // LECTURE Conditional (Ternary) Operator

// const population = '20';
// population >= 33 ? console.log('Canada s population is above the average! Wow') : console.log('Canada s population is below!')


// // CODING CHALLENGE #4

// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// const tip = 275;
// tip >= 50 && tip <= 300 ? console.log(tip * 0.15) : console.log(tip * 0.2);

// console.log(`The bill was for ${bill1} dollars, the tip was for ${tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2
//     } dollars and in total was ${bill1 + (tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2)
//     } dollars`);



// // FUNDAMENTALS PART TWO

// Using strict mode. It funtcion when you write it at the very top of your code
// by writting 'use strict';


// Functions

// function describeCountry(country, population, capitalCity) {
//     const parameters = `${country} has ${population} million people and its Capital is ${capitalCity}.`
//     return parameters;
// }

// console.log(describeCountry('Canada', 28, 'Toronto'));
// console.log(describeCountry('Mexico', 60, 'Mexico City'));
// console.log(describeCountry('China', 101, 'Hong Kong'));

// function money(country, coin, language) {
//     const countrys = `${country} speaks ${language} and their moneys is called ${coin}`;
//     return countrys;
// }

// console.log(money('Mexico', 'pesos', 'spanish'));
// console.log(money('USA', 'dollars', 'english'));
// console.log(money('France', 'euros', 'french'));


// // Function Expressions vs Declarations

// // Function Declaration
// function percentageofWorld1(population, country) {
//     const percentage = `${country} has over ${population} million and represents the ${population / 7900 * 100} % of the world`;
//     return percentage;
// }

// console.log(percentageofWorld1(128, 'Mexico'));
// console.log(percentageofWorld1(38, 'Canada'));

// // Function Expression

// const percentageofWorld2 = function (population, country) {
//     const percentage = `${country} has over ${population} million and represents the ${population / 7900 * 100} % of the world`;
//     return percentage;
// }

// console.log(percentageofWorld2(128, 'Mexico'));
// console.log(percentageofWorld2(38, 'Canada'));


// // Arrow Functions

// // When is a very simple function
// const calcAge = birthYear => 2020 - birthYear;
// const age1 = calcAge(2000);
// console.log(age1);

// // When you have one parameter but more code insidde the function
// const yearsuntilRetirment = birthYear => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsuntilRetirment(2000));


// // When you have more parameter
// const yearsuntilRetirment2 = (birthYear, firstName) => {
//     const age = 2020 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsuntilRetirment2(2000, 'Ian'));
// console.log(yearsuntilRetirment2(1995, 'Rick'));


// // Functions calling other functions

// function fruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(oranges, apples) {
//     const applePieces = fruitPieces(oranges);
//     const orangesPieces = fruitPieces(apples);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// // FUNDAMENTALS 2 CODING CHALLENGE #1

// const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

// const dolphmans = calcAverage(44, 23, 71); // Data 1
// const koalas = calcAverage(65, 54, 49); // Data 1

// console.log(dolphmans, koalas);

// const checkWinner = function (avgDolp, avgKo) {
//     if (avgDolp >= (2 * avgKo)) {
//         console.log(`Dolph wins ${avgDolp} vs ${avgKo}`);
//     } else if (avgKo >= (2 * avgDolp)) {
//         console.log(`Koalas wins ${avgKo} vs ${avgDolp}`)
//     } else {
//         console.log(`Nobody wins`);
//     }
// };

// checkWinner(dolphmans, koalas);
// console.log(dolphmans, koalas);


// const dolphmans1 = calcAverage(85, 54, 41); // Data 2
// const koalas1 = calcAverage(23, 34, 27); // Data 2


// checkWinner(dolphmans1, koalas1);
// console.log(dolphmans1, koalas1);

// // LECTURE Functions calling other functions

// const percentageofWorld1 = population => population / 7900 * 100;

// const describePopulation = (country, population) => {
//     const percentage = percentageofWorld1(population);
//     console.log(`${country} has over ${population} and represents the ${percentage}% of the world`);
// };

// describePopulation('Mexico', 101);
// describePopulation('USA', 332);


// INTRODUCTION TO ARRAYS

// const friends = ['Michael', 'Mike', 'Erick'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// friends[0] = 'Ian';
// console.log(friends);
// console.log(friends.length - 1);

// const firstName = 'Ian';
// const person = [firstName, 'Nava', 2021 - 2000, friends];
// console.log(person);

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const years = [1991, 2000, 2002, 1995, 1999];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[3]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[3]), calcAge(years[years.length - 1])];
// console.log(ages);

// // Basic Array Operations (Methods)

// friends.push('Jay');
// friends.push('Alan');
// friends.pop();

// friends.unshift('Nick');
// friends.unshift('Josh');
// console.log(friends);
// friends.shift();

// const popped = friends.shift();
// console.log(popped);
// console.log(friends);


// console.log(friends.indexOf('Erick'));
// console.log(friends.indexOf('Ian'));

// console.log(friends.includes('Ben'));
// console.log(friends.includes('Nem'));

// friends.unshift(21);
// console.log(friends.includes('21'));

// // LECTURE Introduction to Arrays

// const populations = [50, 101, 38, 332];
// console.log(populations.length === 4);

// const percentageofWorld1 = population => population / 7900 * 100;

// const percentage = [
//     percentageofWorld1(populations[1])
// ];

// console.log(percentage);

// // // LECTURE Basic Array Operations (Methods)

// const neighbours = ['Alaska', 'USA', 'Greenland'];
// neighbours.push('Utopia');

// console.log(neighbours);
// neighbours.pop();

// const neighbouring = (neighbours.includes('Germany')) ? console.log('It is in central European country') : console.log('Probably not a central European country');

// neighbours[neighbours.indexOf['USA']] = 'United States of America'; // Jonas did not explain this and also his problem is not correct at all
// console.log(neighbours);


// // CODING CHALLENGE #2

// const bills = [125, 555, 44];
// const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;


// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

// const phrase = `Today our bills was for ${bills[0]} $, we paid on tips for ${tips[0]} $ and our total was for ${total[0]} $.`;

// console.log(phrase);

// INTRODUCTION TO OBJECTS

// const me = {
//     firstName: 'Ian',
//     lastName: 'Nava',
//     status: 'student',
//     age: 2021 - 2000,
//     friends: ['Erick', 'Chris', 'Marcos', 'Kuri', 'Alex']
// };

// console.log(me);

// // DOT VS BRACKET NOTATION

// console.log(me.firstName);
// console.log(me['firstName']);

// const nameKey = 'Name';
// console.log(me['first' + nameKey]);

// // const knowMe = prompt('You can choose between firstName, lastName, status, age or friends :)');

// me.location = 'Canada';
// me['instagram'] = 'ian_mnv';

// // if (me[knowMe]) {
// //     console.log(me[knowMe]);
// // } else {
// //     console.log('Ups! Choose only btwn firstName, last, age, etc')
// // };

// // Small challenge
// // Print to the console -> Ian has 5 friends and his best friend is Erick

// const getToKnowMe = `${me.firstName} has ${me.friends.length} friends and his best friend is ${me.friends[0]}`;

// console.log(getToKnowMe);

// OBJECT METHODS

const me = {
    firstName: 'Ian',
    lastName: 'Nava',
    job: 'student',
    birthYear: 2000,
    friends: ['Erick', 'Chris', 'Marcos', 'Kuri', 'Alex'],
    driverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    // Small challenge
    // Create a string that says 'Ian is 21 years old student who has not a driver's license but his friend Chris does'

    meAgain: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} who has ${this.driverLicense ? 'a' : 'not a'} drivers license but his friend ${this.friends[1]} does.`;
    } // How Jonas did it 
};

// How I did it
const meAgain1 = `${me.firstName} is ${me.calcAge()} years old ${me.job} who has ${me.driverLicense ? 'a' : 'not a'} drivers license but his friend ${me.friends[1]} does.`;
// Also you could have done was "me['driverLicense'] === true ? 'a' : 'not a' "

// console.log(me.meAgain()); // Also I just realize that when you call a function inside an object you have to write the parenthesis ().
// console.log(meAgain1);

// console.log(me.calcAge(2000));

// Instead of writting them like this:
// console.log(me.calcAge(1991));
// console.log(me.calcAge(1991));
// console.log(me.calcAge(1991));

// You'll write it like this, which will be more efficient and will save time
// console.log(me.age);
// console.log(me.age);
// console.log(me.age);

// console.log(me['calcAge'](2000));


// // CODING CHALLENGE #3

const mM = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const jS = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(mM.calcBMI());
jS.calcBMI(); // In some lines up where you were using a function called age you never
// wrote or create this calcBMI I'm confuised right now but thats why I'm going to leave the examples
console.log(jS.bmi);

// Mark's BMI () is higher than John's BMI ()!
console.log(`${mM.calcBMI() > jS.calcBMI() ? mM.firstName : jS.firstName} BMI (${mM.calcBMI() > jS.calcBMI() ? mM.calcBMI() : jS.calcBMI()}) 
is higher than ${mM.calcBMI() < jS.calcBMI() ? mM.firstName : jS.firstName} BMI (${mM.calcBMI() < jS.calcBMI() ? mM.calcBMI() : jS.calcBMI()})`)
// Also the way I wanted to print this string might look confusing so ask uncle to review the challenge with you