// GENERICS
// Giống như là tham số, mà cho biết trước tham số đó thuộc loại gì

type myArr = string[];
type numArr = number[];

const last = (arr: number[]) => arr[arr.length - 1];
console.log(last([1, 2, 3, 4]));

// <T> định dạng khai báo kiểu dữ liệu gì cũng đc, nó sẽ tự kiểm tra và nhận vào, mình k biết trước kiểu dữ liệu
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
console.log(lastT([1, 2, 3]));
console.log(lastT(["a", "b"]));
console.log(lastT<string>(["abc", "bcd"]));
console.log(lastT(["abc", "bcd", 1, true, { id: 1, name: "tintt" }]));

//ví dụ
//Cách viết này là định nghĩa trước kiểu dữ liệu
const makeArr = (x: number) => x;
console.log(makeArr(4));
// Trường hợp chúng ta chưa biết trước kiểu dữ liệu
const makeArrT = <T>(x: T) => x;
console.log(makeArrT(5));
console.log(makeArrT("ABC"));
console.log(makeArrT(true));

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
console.log(makeArrXY(5, 6));
console.log(makeArrXY("ABC", "DEF"));
console.log(makeArrXY(true, false));
console.log(makeArrXY([1, 2, "hi"], { id: 1, name: "tintt" }));

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
makeTuple("x", 5);
makeTuple("x", "y");
makeTuple(1, 2);
