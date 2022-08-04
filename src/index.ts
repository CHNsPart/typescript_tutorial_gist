// Basic Types
let id: number = 5
let company: string = "CHNsPart"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

//Tuple
let person: [number, string, boolean] = [1, "CHN", true] 

//tuple array
let employee: [number, string][]

employee = [
    [1, "CHN",],
    [2, "s",],
    [3, "Part",]
]

//Unions
let pid: string | number = 22
pid = "45"

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
console.log(Direction2.Down)

//Objects
type User = {
    id: number,
    name: string
}

/* const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "CHN"
} */
const user: User = {
    id: 1,
    name: "CHN"
}

//Type Assertion
let cid: any = 1
/* let customerId = <number>cid */
let customerId = cid as number


function addNum(x: number, y: number): number{
    return x+y
}
console.log(addNum(1,23))

function log(message: string|number): void{
    console.log(message)
}
log("1OK1")

//Interfaces
interface UserInterface {
    readonly id: number, //can not mutate
    name: string,
    age?: number //optional
}

const user1:UserInterface = {
    id: 1,
    name: "CHN"
} 

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number):number => x+y
const sub: MathFunc = (x:number, y:number):number => x-y




//classes

/* class Person {
    id:number
    name: string

    constructor(id:number, name: string){
        this.id = id
        this.name = name
    }
} */
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    id:number
    name: string

    constructor(id:number, name: string){
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const chn = new Person(1, "Chayan")
const mike = new Person(1, "Mike")
/* console.log(chn, mike)
console.log(chn.register()) */

class Employee extends Person {
    position: string

    constructor(id:number, name:string, position:string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Shawn", "Developer")

console.log(emp)
console.log(emp.register())

// Generics
function getArray(items:any[]): any{
    return new Array().concat(items)
}
let numArray = getArray([1,2,3,4])
let strArray = getArray(["chn","chn2","chn3"])

numArray.push('hello')
numArray.push('hello')