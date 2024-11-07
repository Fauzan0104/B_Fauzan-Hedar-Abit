//function
function printHeart() {
    console.log("<3");
}

printHeart();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); 
console.log(multiply(9, 9)); 
console.log(multiply(5, 4)); 

//scoope
let animal = "Giant Pacific Octopus";

function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}

observe();

//arrow
const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna"));  

//loop
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

//set time
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");

//try and catch
function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }

        if (a === 0 || b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        return a / b;
    } catch (error) {
        console.error("Terjadi kesalahan: " + error.message);
    }
}

console.log(divideNumbers(500, 5)); 
console.log(divideNumbers("x", 2)); 
console.log(divideNumbers(31, 0)); 

//array
let antrian = ["ray", "fiki", "fadhilla", "farah"];

antrian.push("nabila");

antrian.push("maza", "elsi");

antrian.pop();

antrian.splice(0, 2);

antrian.unshift("tomi");

console.log(antrian);
