"use strict";
// Basic Types
let id = 5;
let company = "CHNsPart";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "CHN", true];
//tuple array
let employee;
employee = [
    [1, "CHN",],
    [2, "s",],
    [3, "Part",]
];
//Unions
let pid = 22;
pid = "45";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
/* const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "CHN"
} */
const user = {
    id: 1,
    name: "CHN"
};
//Type Assertion
let cid = 1;
/* let customerId = <number>cid */
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 23));
function log(message) {
    console.log(message);
}
log("1OK1");
const user1 = {
    id: 1,
    name: "CHN"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const chn = new Person(1, "Chayan");
const mike = new Person(1, "Mike");
/* console.log(chn, mike)
console.log(chn.register()) */
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp);
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["chn", "chn2", "chn3"]);
numArray.push('hello');
numArray.push('hello');
