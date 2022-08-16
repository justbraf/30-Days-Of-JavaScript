// this is your main.js script
tarea = () => {
    let b = prompt("base?");
    let h = prompt("heigt?");
    console.log(`The area of the trianlge is ${0.5 * +b * +h}`);
}

tper = () => {
    let a = prompt("side a");
    let b = prompt("side b");
    let c = prompt("side c");
    console.log(`The perimeter of the trianlge is ${+a + +b + +c}`);
}

recCalc = () => {
    let a = prompt("side a");
    let b = prompt("side b");
    console.log(`The area of the rectanlge is ${+a * +b}`);
    console.log(`The perimeter of the rectanlge is ${2 * (+a + +b)}`);
}

// Get radius using prompt and calculate the area of a circle(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
cirCalc = () => {
    let rad = prompt("Enter radius");
    const PI = 3.14;
    console.log(`The area of the circle is ${+rad * +rad * PI}`);
    console.log(`The circumference of the circle is ${2 * PI * +rad}`)
}

// Calculate the value of y(y = x^2 + 6x + 9).Try to use different x values and figure out at what x value y is 0.
quadEqn = () => {
    for (let x = -10; x < 10; x++) {
        console.log(x, x ** 2 + 6 * x + 9);

    }
}

calPay = () => {
    let hrs = prompt("Enter Hours");
    let rate = prompt("Enter rate per hour");
    console.log(`Your weekly earning is ${+hrs * +rate}`);
}

compName = () => {
    let firstName = prompt("Enter first name");
    let lastName = prompt("Enter last name");
    if (firstName.length > lastName.length)
        console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
    else
        console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);
}

ageChk = () => {
    let birthYear = prompt("Enter birth year");
    let curYear = new Date().getFullYear();
    const age = curYear - +birthYear;
    if (age >= 18)
        console.log(`You are ${age}. You are old enough to drive`);
    else
        console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}
timeLive = () => {
    let yrs = prompt("Enter the number of years you were alive");
    const secs = 60 * 60 * 24 * 365 * +yrs;
    console.log(`You lived ${secs} seconds`);
}