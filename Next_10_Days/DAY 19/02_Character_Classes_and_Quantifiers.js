// Task 3

const str = "Abc abc34 Cdef als12 Asad 123 sd45 df90784"

const result = str.match(/\b[A-Z][a-z]*\b/g)

console.log(result);

// Task 4

const result2 = str.match(/[0-9]+/g)

console.log(result2);
