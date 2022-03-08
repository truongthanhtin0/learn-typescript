// OPTIONAL AND NON NULL

const add = (a: number, b?: number) => b ? a + b : a
console.log(add(1,3))
console.log(add(1))

const addNonNull = (a: number, b?: number) => a + b!
// b! -> thông báo chắc chắn sẽ truyền b -> hết lỗi
console.log(addNonNull(1,2))
console.log(addNonNull(3))