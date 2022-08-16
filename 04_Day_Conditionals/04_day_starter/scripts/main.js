// this is your main.js script
grades = () => {
    let score = prompt("Enter the score");
    if (score >= 90)
        console.log("You got an A");
    else if (score >= 70)
        console.log("You got an B");
    else if (score >= 60)
        console.log("You got an C");
    else if (score >= 50)
        console.log("You got an D");
    else
        console.log("You got an F");
}
alert('Open the browser console whenever you work on JavaScript')


wknd = () => {
    let day = prompt("What is today?");
    if (day.toLowerCase() == "saturday")
        console.log("Saturday is a weekend");
}

daysInaMonth = () => {
    let mth = prompt("Pick a month?");
    switch (mth.toLowerCase()) {
        case "january":
            month = 1;
            break;
        case "february":
            month = 2;
            break;
        case "march":
            month = 3;
            break;
        case "april":
            month = 4;
            break;
        case "may":
            month = 5;
            break;
        case "june":
            month = 6;
            break;
        case "july":
            month = 7;
            break;
        case "august":
            month = 8;
            break;
        case "september":
            month = 9;
            break;
        case "october":
            month = 10;
            break;
        case "november":
            month = 11;
            break;
        case "december":
            month = 12;
            break;

        default:
            month = 0;
            break;
    }
    if (month != 0)
        console.log(`${mth} has ${new Date(2022, month, 0).getDate()} days`);
    else
        console.log("Invalid entry");
}