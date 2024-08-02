const book = {
  title: "Power Of Your Subconscious Mind",
  author: "Joseph Murphy",
  year: "2019",
};

book.getBookDetails = () => {
  return book.title + " book author is " + book.author;
};

console.log(book.getBookDetails());


book.setYear = (year) => {
  book.year = year;
  return book;
};

console.log(book.setYear(2016));
