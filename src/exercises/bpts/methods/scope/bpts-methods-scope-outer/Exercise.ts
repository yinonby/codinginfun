import fs from 'fs'; // ignore this line

const myName: string = "John";

function foo() {
    console.log("Inside foo: myName is:");
    console.log(myName);
}

console.log("Outside foo: myName is:");
console.log(myName);
foo();
