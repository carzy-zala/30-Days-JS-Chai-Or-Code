// Task 5

function reverse(str) {
  if (str.length === 1) return str[0];

  return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
}

console.log(reverse("apple"));
console.log(reverse("mango"));
console.log(reverse("javascript"));

// Task 6

function isPallindrom(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPallindrom(str.substr(1, str.length - 2));
}

console.log(isPallindrom("madam"));
console.log(isPallindrom("mango"));
