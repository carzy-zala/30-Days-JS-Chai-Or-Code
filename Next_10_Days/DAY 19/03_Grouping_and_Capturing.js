const str = "(931) 360-5814";
const result = str.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);
// console.log(result);

console.log(
  result
    ? {
        areaCode: result[1],
        centralOfficeCode: result[2],
        lineNumber: result[3],
      }
    : null
);

// Task 6
const str2 = "mr.zala2003@gmail.com";

const result2 = str2.match(/(\w*.*\w+)@(\w+\.\w+)/);

console.log({username:result2[1],domain:result2[2]});
