import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const document1: hasPrint = new Invoice("Tintt", "football", 200000)
console.log("Log : document1", document1)

const document2: hasPrint = new Payment("ABC", "Run", 1000)
console.log("Log : document2", document2)

const allDocument: hasPrint[] = []
allDocument.push(document1)
allDocument.push(document2)
console.log("Log : allDocument", allDocument)