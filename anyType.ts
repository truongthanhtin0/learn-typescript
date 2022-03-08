// ANY TYPES
// Kiểu dữ liệu gì cũng nhận

let age: any
age = "hi"
age = 22
age = {id: 1, name: "tintt"}
age = [1, 3, true, "abcd"]
console.log(age)

let mixed: any[] = []
mixed.push(1)
mixed.push("hi")
mixed.push(true)
mixed.push({id: 1, age: 22})
console.log(mixed)
