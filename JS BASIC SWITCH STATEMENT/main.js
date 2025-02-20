// 1
// let day = prompt("what is day today")
// switch (day) {
//     case "mon":
//         console.log("today the first day of week");
//         break;
//     case "tues":
//         console.log("today the second day of week");
//         break;
//     case "wedns":
//         console.log("today the third day of week");
//         break;
//     case "thurs":
//         console.log("today the fourth day of week");
//         break;
//     case "fri":
//         console.log("today the fifth day of week");
//         break;
//     case "sat":
//         console.log("today the sixth day of week");
//         break;
//     case "sun":
//         console.log("today the seven day of week");
//         break;
//     default:
//         console.log("your answer is wrong");
//         break;
// }
// 2
// let numOfMonth = +prompt("Write the a num of month")
// switch (numOfMonth) {
//     case 1:
//         console.log("In this month you has a 31 days");
//         break;
//     case 2:
//         console.log("In this month you has a 28 days");
//         break;
//     case 3:
//         console.log("In this month you has a 31 days");
//         break;
//     case 4:
//         console.log("In this month you has a 30 days");
//         break;
//     case 5:
//         console.log("In this month you has a 31 days");
//         break;
//     case 6:
//         console.log("In this month you has a 30 days");
//         break;
//     case 7:
//         console.log("In this month you has a 31 days");
//         break;
//     case 8:
//         console.log("In this month you has a 31 days");
//         break;
//     case 9:
//         console.log("In this month you has a 30 days");
//         break;
//     case 10:
//         console.log("In this month you has a 31 days");
//         break;
//     case 11:
//         console.log("In this month you has a 30 days");
//         break;
//     case 12:
//         console.log("In this month you has a 31 days");
//         break;
//     default:
//         console.log("Invalid input! Please enter a number between 1 and 12.");
//         break;
// }
// 3 
// let character = +prompt("how many character of vowel");
// switch (character) {
//     case 5:
//         console.log("yeah you are correct!");
//         break;

//     default:
//         console.log("oops! your answer is wrong");
//         break;
// }
// 4 
let grade = +prompt("Enter your grade .")
switch (grade) {
    case grade >= 85:
        console.log("you achive a A1 Grade");
        break;
    case grade >= 70:
        console.log("you achive a A Grade");
        break;
    case grade >= 60:
        console.log("you achive a B Grade");
        break;
    case grade >= 50:
        console.log("you achive a C Grade");
        break;
    case grade >= 40:
        console.log("you achive a D Grade");
        break;
    case grade > 100:
        console.log("invalid input ,please enter the number between 1 to 100");
        break;
    case( grade < 0):
        console.log("invalid input ,please enter the number between 1 to 100");
        break;

    default:
        console.log("you are fail");
        break;
}