// EXPLICIT TYPE
// Khai báo kiểu dữ liệu ngay từ đầu

let myName: string
let age: number
let isAuthen: boolean

myName = "tintt"
age = 22
isAuthen = true

//Array
let students: string[]
students = ["tintt", "Duyna"]
students.push("Lannt")

//Union
let mixed: (string | number | boolean)[]
mixed = [6, true, false, "tintt"]
mixed.push(11)
mixed.push("hi")

let id: number | string
id = 123
id = "123"
// id = true

let hobby: "football" | "music"
// hobby = "run"
// hobby = "book"
hobby = "football"


//Object
let person: object
person = {
    name: "tintt",
    age: 30
}

let student: {
    id: number,
    name: string,
    age: number,
    isGood: boolean
}
student = {
    id: 1,
    name: "tintt",
    age: 22,
    isGood: true
}