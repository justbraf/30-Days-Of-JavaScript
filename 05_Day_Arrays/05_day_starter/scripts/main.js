console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// Level 1
let myArray = [];
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", myArr, "length:", myArr.length);
console.log("first:", myArr[0], "middle: ", myArr[Math.round((myArr.length - 1) / 2)], "last: ", myArr[myArr.length - 1]);
let mixedDataTypes = [5, 3, "four", "two", 9.81, 3.14, [7, 8, 9]];
console.log(mixedDataTypes, "length:", mixedDataTypes.length);
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies, "Total:", itCompanies.length, "first:", itCompanies[0], "middle: ", itCompanies[Math.round((itCompanies.length - 1) / 2)], "last: ", itCompanies[itCompanies.length - 1]);
itCompanies.forEach(element => {
    console.log(element);
});
itCompanies.forEach(element => {
    console.log(element.toUpperCase());
});
console.log(`${itCompanies.slice(0, 6).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT Companies.`);

chkComp = () => {
    let cComp = prompt("Type the company to check for:", "Company Name");
    const arrLower = [];
    itCompanies.forEach(element => {
        arrLower.push(element.toLowerCase());
    });
    const result = arrLower.indexOf(cComp.toLowerCase());
    if (result == -1)
        console.log("Company is not found");
    else
        console.log(`We have found ${itCompanies[result]}`);
}
itCompanies.forEach(element => {
    if (element.match(/o/gi) != null) {
        if (element.match(/o/gi).length < 2)
            console.log(element);
    }
    else
        console.log(element);
});
console.log("Sorted:", itCompanies.sort());
console.log("Reversed:", itCompanies.sort().reverse());
console.log("Slice 1st 3:", itCompanies.slice(0, 3));
console.log("Slice last 3", itCompanies.slice(itCompanies.length - 3, itCompanies.length));
// itCompanies.push("Cisco");
if (itCompanies.length % 2 == 0)
    console.log("Even middle", itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1));
else
    console.log("Odd middle", itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)));
console.log("Remove First", itCompanies.shift());
console.log(itCompanies);
console.log("Remove Middle", itCompanies.splice(Math.ceil(itCompanies.length / 2 - 1), 2 - (itCompanies.length % 2)));
console.log("Remove Last", itCompanies.splice(itCompanies.length - 1));
console.log(itCompanies.splice(0));

//level 2
console.log("Countries", countries, "\nWeb Techs", webTechs);
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[,.]/gi, "");
const words = text.split(" ");
console.log(words);
console.log(words.length);
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
if (confirm("Remove Honey?"))
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
if (countries.includes("Ethiopia"))
    console.log("ETHIOPIA");
else
    countries.push("Ethiopia");
if (webTechs.includes("Sass"))
    console.log("Sass is a CSS preprocess");
else
    webTechs.push("Sass");
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log("Min:", ages[0], "\tMax:", ages[ages.length - 1]);
// ages.pop();
console.log(ages);
let median = [];
if (ages.length % 2 == 0) {
    median = ages.slice(ages.length / 2 - 1, ages.length / 2 + 1);
    console.log(`Even Median ${(median[0] + median[1]) / 2}`);
}
else
    console.log("Odd Median", ages.slice(Math.floor(ages.length / 2), Math.ceil(ages.length / 2)));
let sum = 0;
ages.forEach(age => {
    sum += age;
});
const avg = sum / ages.length
console.log(`The average age is ${avg}`);
console.log(`The range of ages is ${ages[ages.length - 1] - ages[0]}`);
console.log(Math.abs(ages[0] - avg) < Math.abs(ages[ages.length - 1] - avg));
console.log(countries.slice(0, 10));
// countries.push("Mars");
if (countries.length % 2 == 0)
    console.log("Even middle", countries.slice(countries.length / 2 - 1, countries.length / 2 + 1));
else
    console.log("Odd middle", countries.slice(Math.floor(countries.length / 2), Math.ceil(countries.length / 2)));
if (countries.length % 2 == 0)
    console.log("Even: \nFirst", countries.slice(0, countries.length / 2), "\nSecond", countries.slice(countries.length / 2 + 1), countries.length);
else
    console.log("Odd: \nFirst", countries.slice(0, Math.floor(countries.length / 2)), "\nSecond", countries.slice(Math.ceil(countries.length / 2), countries.length));