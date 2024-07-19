const library = {
  name: "Central Library",
  books: [
    {
      title: "Power Of Your Subconscious Mind",
      author: "Joseph Murphy",
      year: 2016,
    },
    {
      title: "The rudest book ever",
      author: "Shwethabh Gangwar",
      year: 2019,
    },
  ],
};

console.log(library);

console.log("Library name  : ", library.name);

console.log(
  "Title of all books :\n1. ",
  library.books[0].title,
  "\n2. ",
  library.books[1].title
);
