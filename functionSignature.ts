// FUNCTION SIGNATURE
// Đặt ra dạng, tham số truyền vào là gì, trả ra kết quả là gì

let greet: Function
greet = () => console.log("hello world")

let greet: (a: string, b: string) => void
greet = (name: string, greeting: string) => console.log(`${name} says ${greeting}`)
greet("tintt", "hi!")

let calculate: (a: number, b: number, c: string) => number
calculate = (num1: number, num2: number, action: string) => action === "add" ? num1 + num2 : num1 - num2
console.log(calculate(4,2,"add"))
console.log(calculate(4,2,"add1"))

type Student = {name: string; age: number}
let printStudent: (student: Student) => void
printStudent = (newStudent: Student) => console.log(newStudent.name, newStudent.age)
// printStudent = ({name, age}: Student) => console.log(name, age)
printStudent({name: "Tintt", age: 22})

const nam = {
    name: "Nam",
    age: 25
}
printStudent(nam)