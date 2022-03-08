// CLASS

export class Employee {
    // public name: string
    // private age: number //K truy cập đc ngoài class
    // readonly male: boolean //Chỉ đọc và hiển thị, k sửa giá trị đc

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n,
    //     this.age = a,
    //     this.male = m
    // }

    //Cách viết ngắn gọn hơn
    constructor(
        public name: string, 
        private age: number, 
        readonly male: boolean
        ) {}

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}

const tintt = new Employee("tintt", 22, true)
console.log(tintt)
console.log(tintt.name)
// console.log(tintt.age)
console.log(tintt.male)
tintt.name = "Tintt"
console.log(tintt.name)
console.log(tintt.print())

const bob = new Employee("bob", 25, true)

let employees: Employee[] = []
employees.push(tintt)
employees.push(bob)

employees.map(item => console.log(item, item.print()))


