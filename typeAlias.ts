//TYPE ALIAS
//Tự tạo ra 1 type mới
// Chỉ là tên thay thế

type stringOrNumber = string | number;
type student = {
  name: string;
  id: stringOrNumber;
};

const studentDetail = (id: stringOrNumber, studentName: string) =>
  console.log(`Student ${studentName} has id: ${id}`);
studentDetail(6, "Tintt");
studentDetail("Hi", "ABC");

const greet = (user: student) => console.log("User: ", user);
greet({ name: "tintt", id: 1 });
