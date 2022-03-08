// Enum
// Dùng khi dữ liệu 1 chiều
// Đặt tên UpperCase

// K xét giá trị thì bắt đầu từ 0, phần tử sau bằng giá trị trước + 1
enum Status {
  PENDING,
  IN_PROGRESS,
  DONE,
  CANCELLED,
}
console.log(Status.PENDING);
console.log(Status.CANCELLED);

// Xét giá trị tại vị trí nào thì giá trị đc gán cho vị trí đó
// còn lại vẫn chạy theo thứ tự như bình thường
enum Status1 {
  PENDING1 = 6,
  IN_PROGRESS1,
  DONE1,
  CANCELLED1,
}
console.log(Status1.PENDING1);
console.log(Status1.CANCELLED1);

enum Status2 {
  PENDING2,
  IN_PROGRESS2,
  DONE2 = 17,
  CANCELLED2,
}
console.log(Status2.PENDING2);
console.log(Status2.CANCELLED2);

const temp: Status2 = Status2.PENDING2;
console.log(temp);

// Gán giá trị được
const temp1: Status2 = 10;
console.log(temp1);

// truy xuất vào enum
console.log(Status2[1]);
console.log(Status2["IN_PROGRESS2"]);

// Dùng với chuỗi cũng tương tự
