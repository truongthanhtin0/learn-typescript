// Function

const square = (a: number, b: number) => a * b
console.log(square(3, 5))


let greet: Function
greet = (title : string) => console.log(title)
greet("Hello world!")


const add = (a: number, b: number, c: number) => a + b + c
console.log(add(5,6,9))


const add1 = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c)
}
add1(1,2,3)
add1(1,2,"abc")
add1(1,2)


const addDefault = (a: number, b: number | string = 10) => {
    console.log(a)
    console.log(b)
}
addDefault(1,3) 
addDefault(1,"abc")
addDefault(1)

