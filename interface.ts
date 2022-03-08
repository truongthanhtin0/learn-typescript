// INTERFACE

interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const tintt: Person = {
    name: "tintt",
    age: 22,
    //chỉ khai báo hàm
    speak(text: string): void {
        console.log(text)
    },
    spend(amt: number): number {
        console.log(amt)
        return amt
    }
}

console.log(tintt)

const helloPerson = (onePerson: Person) => console.log(`Hello ${onePerson.name}`)
helloPerson(tintt)