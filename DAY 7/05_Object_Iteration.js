const book = {
  title: "Power Of Your Subconscious Mind",
  author: "Joseph Murphy",
  year: 2016,
};

for (key in book) {
  console.log(key, " : ", book[key]);
}

console.log(Object.keys(book));
console.log(Object.values(book));
