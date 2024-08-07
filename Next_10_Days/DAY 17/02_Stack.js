class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  #top;
  #heading;
  constructor() {
    this.#top = null;
    this.#heading = null;
  }

  push(data) {
    let newNode = new Node(data);

    if (!this.#top && !this.#heading) {
      this.#top = newNode;
      this.#heading = newNode;
    } else {
      this.#top.next = newNode;
      this.#top = newNode;
    }

    // console.log(`${newNode.value} added sucessfully`);

    newNode = null;
  }

  pop() {
    let head = this.#heading;
    if (head === this.#top) {
      this.#heading = null;
      this.#top = null;
      return;
    }

    while (head.next !== this.#top) {
      head = head.next;
    }

    let deletedNode = this.#top;
    // process.stdout.write(deletedNode.value);

    this.#top = head;
    head.next = null;

    deletedNode = null;
  }

  peek() {
    return this.#top.value;
  }

  display() {
    let head = this.#heading;

    while (head) {
      process.stdout.write(head.value + "->");
      head = head.next;
    }

    console.log("NULL");
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);

s1.display();

console.log(s1.peek());

function reverseString(str) {
  const strReverse = new Stack();
  for (let char of str) {
    strReverse.push(char);
  }
  process.stdout.write("Your current stack is : ");

  strReverse.display();

  for (let i = 0; i < str.length; i++) {
    process.stdout.write(strReverse.peek());
    strReverse.pop();
  }
  console.log();
  process.stdout.write("Your current stack is : ");
  strReverse.display();
}

reverseString("hello");
reverseString("javascript");
