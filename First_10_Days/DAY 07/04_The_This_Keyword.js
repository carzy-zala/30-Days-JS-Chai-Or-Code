const book = {
  title: "Power Of Your Subconscious Mind",
  author: "Joseph Murphy",
  year: 2016,
};

book.getTitleAndYear = function () {
  return this.title + " published in " + this.year;
};

console.log(book.getTitleAndYear());
