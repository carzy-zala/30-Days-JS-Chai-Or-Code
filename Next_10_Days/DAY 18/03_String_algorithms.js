// Task 6

const str = "hello world";

function countOccurance(str) {
  const occurance = {};

  for (let i = 0; i < str.length; i++) {
    if (occurance[str[i]]) {
      occurance[str[i]]++;
    } else {
      occurance[str[i]] = 1;
    }
  }

  console.log(occurance);
}

countOccurance(str);

// Task 7
function longestSubStr(str) {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  let strset = new Set();

  while (j < str.length) {
    if (!strset.has(str[j])) {
      strset.add(str[j]);
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      strset.delete(str[i]);
      i++;
    }
  }

  console.log("Substring is:",str.slice(i, j).replace(" ","_"));

  return maxLength;
}

console.log(longestSubStr(str));
console.log(longestSubStr("str"));
