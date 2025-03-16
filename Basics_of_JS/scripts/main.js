let information = "Hello there!"

console.log(information)

alert(information)

let image = document.getElementById("image")
image.setAttribute("width",640)
image.setAttribute("height",400)

let array = ["Apple", "Peach", "Apricot"]

if(array.length == 3 ) 
{
    console.log("This array contains 3 elements")
} else {
    console.log("This array contains unknown number of elements")
}

let currentDay = new Date().getDay()

console.log("---------------------")

switch (currentDay) 
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Out of scope");
}

console.log("---------------------")

for(let i = 0; i < array.length; i++)
{
    console.log(array[i])
}

console.log("---------------------")

for(let index in array)
{
    console.log(index + ": " + array[index])
}

console.log("---------------------")

for(let fruit of array) {
    console.log(fruit)
}

console.log("---------------------")

let lorem = "Lorem Ipsum"

let newString = "";

for(let letter of lorem)
{
    newString += letter;
}

console.log(newString)

let i = 0;
let outputDiv1 = document.getElementById("output1"); // Get the div element
while (i < 100) {
    if (i % 15 === 0) {
        outputDiv1.innerHTML += i + "<br>"; // Append the number and a line break
    }
    i++;
}

let j = 0;

let outputDiv2 = document.getElementById("output2"); // Get the div element
do {
    if (j % 10 === 0) {
        outputDiv2.innerHTML += j + "<br>"; // Append the number and a line break
    }
    j++;
}while (j < 100)