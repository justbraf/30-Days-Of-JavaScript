console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Level 1
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for (let index = 0; index <= 10; index++) {
    console.log(index);
}
{
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
for (let index = 10; index >= 0; index--) {
    console.log(index);
}
{
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
{
    let n = prompt("How high to count?");
    for (let index = 0; index <= n; index++) {
        console.log(index);
    }
}
{
    let steps;
    for (let index = 1; index <= 7; index++) {
        steps = "";
        for (let idx = 1; idx <= index; idx++) {
            steps += "#";
        }
        console.log(steps);
    }
}
for (let index = 0; index <= 10; index++) {
    console.log(`${index} * ${index} = ${index * index}`);
}
console.log("i\ti^2\ti^3");
for (let index = 0; index <= 10; index++) {
    console.log(`${index} \t ${index ** 2} \t ${index ** 3}`);
}
for (let index = 0; index <= 100; index++) {
    if (index % 2 == 0)
        console.log(`${index}`);
}
for (let index = 0; index <= 100; index++) {
    if (index % 2 == 1)
        console.log(`${index}`);
}
console.log("Prime Numbers:");
for (let ix = 0; ix <= 100; ix++) {
    let isPrime = true;
    if (ix > 1) {
        for (let index = 2; index < ix; index++) {
            if (ix % index == 0)
                isPrime = false;
        }
        if (isPrime)
            console.log(ix);
    }
}
{
    let sum = 0;
    for (let index = 0; index <= 100; index++) {
        sum += index;
    }
    console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
}
{
    let sumE = 0, sumO = 0;
    for (let index = 0; index <= 100; index++) {
        if (index % 2 == 0)
            sumE += index;
        else
            sumO += index;
    }
    console.log(`The sum of all evens from 0 to 100 is ${sumE} and the sum of all odds from 0 to 100 is ${sumO}.`);
}
{
    const sum = [0, 0];
    for (let index = 0; index <= 100; index++) {
        if (index % 2 == 0)
            sum[0] += index;
        else
            sum[1] += index;
    }
    console.log(`The sum of all evens and odds from 0 to 100 are ${sum} respectively.`);
}
{
    console.log("Five random numbers");
    const rndNum = [];
    for (let index = 0; index < 5; index++) {
        rndNum.push(Math.floor(Math.random() * 10 + 1));
    }
    console.log(rndNum);
}
{
    console.log("Five unique random numbers");
    const rndNum = [];
    for (let index = 0; index < 5; index++) {
        let rNum = Math.floor(Math.random() * 10 + 1);
        while (rndNum.includes(rNum))
            rNum = Math.floor(Math.random() * 10 + 1);
        rndNum.push(rNum);
    }
    console.log(rndNum);
}
{
    console.log("Six character random id");
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const rndId = [];
    for (let index = 0; index < 6; index++) {
        rndId.push(chars[Math.floor(Math.random() * 36)]);
    }
    console.log(rndId.join(""));
}

// Level 2
{
    const idLen = prompt("Length of your id?");
    console.log(`${idLen} character random id`);
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const rndId = [];
    for (let index = 0; index < +idLen; index++) {
        rndId.push(chars[Math.floor(Math.random() * 36)]);
    }
    console.log(rndId.join(""));
}
{
    console.log("Random hexadecimal colour code");
    const hexValues = "0123456789abcdef";
    const rndHexColor = [];
    for (let index = 0; index < 6; index++) {
        rndHexColor.push(hexValues[Math.floor(Math.random() * 16)]);
    }
    console.log(`#${rndHexColor.join("")}`);
}
{
    console.log("Random RGB colour code");
    rgbColors = [];
    for (let index = 0; index < 3; index++) {
        rgbColors.push(Math.floor(Math.random() * 256));
    }
    console.log(`rgb(${rgbColors.join(",")})`);
}
{
    console.log("Uppercase Countries array");
    const countriesCap = [];
    for (const country of countries)
        countriesCap.push(country.toUpperCase());
    console.log(countriesCap);
}
{
    console.log("Length of each country in array");
    const countriesLen = [];
    for (const country of countries)
        countriesLen.push(country.length);
    console.log(countriesLen);
}
{
    console.log("sub array containing name, abbrev & length of each country in array");
    const newCountries = [];
    // const subArr = ["", "", ""];
    let abbrev;
    for (const country of countries) {
        const subArr = new Array("", "", "");
        subArr[0] = country;
        abbrev = "";
        for (let i = 0; i < 3; i++)
            abbrev += country[i];
        subArr[1] = abbrev.toUpperCase();
        subArr[2] = country.length;
        newCountries.push(subArr);
    }
    console.log(newCountries);
}
{
    console.log("country with land in name");
    const landArr = [];
    for (const country of countries) {
        if (country.includes("land")) {
            landArr.push(country);
        }
    }
    if (landArr.length > 0)
        console.log(landArr);
    else
        console.log("All countries are without \"land\"");

}
{
    console.log("country end with ia in name");
    const landArr = [];
    for (const country of countries) {
        if (country.endsWith("ia")) {
            landArr.push(country);
        }
    }
    if (landArr.length > 0)
        console.log(landArr);
    else
        console.log("All countries ends without \"ia\"");

}
{
    console.log("Longest country name");
    let longCountry = "";
    for (const country of countries) {
        if (longCountry.length < country.length)
            longCountry = country;
    }
    console.log(longCountry);
}
{
    console.log("Country names with only five characters");
    const shortCountries = [];
    for (const country of countries) {
        if (country.length == 5)
            shortCountries.push(country);
    }
    console.log(shortCountries);
}
{
    console.log("Longest Web Techs name");
    let longWebTech = "";
    for (const wt of webTechs) {
        if (longWebTech.length < wt.length)
            longWebTech = wt;
    }
    console.log(longWebTech);
}
{
    console.log("sub array containing name & length of each web tech in array");
    const newWebTech = [];
    for (const wt of webTechs) {
        const subArr = new Array("", "");
        subArr[0] = wt;
        subArr[1] = wt.length;
        newWebTech.push(subArr);
    }
    console.log(newWebTech);
}
{
    console.log("What's the tech stack");
    let stack = "";
    for (stk of mernStack)
        stack += stk[0].toUpperCase();
    console.log(stack);
}
console.log("Web Technologies");
for (web of webTechs)
    console.log(web);
{
    console.log("Reverse using loop");
    const fruit = ['banana', 'orange', 'mango', 'lemon'];
    const fruitRev = [];
    console.log("Before:", fruit);
    const allFruit = fruit.length;
    for (let i = 0; i < allFruit; i++) {
        fruitRev.push(fruit.pop());
    }
    console.log("After:", fruitRev);
}
{
    console.log("Array of arrays output");
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ];
    for (fs of fullStack)
        for (tech of fs)
            console.log(tech);
}

// Level 3
{
    console.log("Copy array without mutation");
    const newCountries = countries.slice();
    console.log(newCountries);
}
{
    console.log("Copy and sort array");
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
    const sortedCountries = countries.slice();
    sortedCountries.sort();
    console.log(sortedCountries);
}
{
    webTechs.sort();
    mernStack.sort();
}
{
    console.log("Countries with two or more words, print as an array");
    const multiNameCountries = [];
    for (country of countries)
        if (country.split(" ").length >= 2)
            multiNameCountries.push(country);
    console.log(multiNameCountries);
}
{
    console.log("Reverse and capitalize countries array");
    const revCountries = [];
    for (country of countries)
        revCountries.push(country.toUpperCase());
    revCountries.reverse();
    console.log(revCountries);

}