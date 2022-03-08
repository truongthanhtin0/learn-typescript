// Union Type
// Select có thể kiểu dữ liệu này hoặc kiểu dữ liệu kia
// Hoặc giá trị này hay giá trị kia
// Sài dấu |

type status = number | string;
type status1 = 1 | 2 | 3;
type status2 = "a" | "b";

const isWeekend = (date: Date): boolean => {
  const day = date.getDate();
  return day === 6 || day === 0;
};
console.log(isWeekend(new Date()));

const isWeekend1 = (date: Date | string): boolean => {
  if (typeof date === "string") date = new Date(date);
  const day = date.getDay();
  return day === 6 || day === 0;
};
console.log(isWeekend1("Sat Mar 19 2022 10:17:06 GMT+0700 (Giờ Đông Dương)"));
