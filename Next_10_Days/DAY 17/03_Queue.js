class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  #front;
  #rear;
  #length;
  constructor() {
    this.#front = null;
    this.#rear = null;
    this.#length = 0;
  }

  enqueue(data) {
    let newNode = new Node(data);
    this.#length++;

    if (!this.#front && !this.#rear) {
      this.#front = newNode;
      this.#rear = newNode;
    } else {
      this.#rear.next = newNode;
      this.#rear = newNode;
    }
    newNode = null;
  }

  dequeue() {
    let deletedNode = this.#front;

    if (!this.#front) {
      console.log("Queue is already Empty");
      return;
    } else {
      this.#front = this.#front.next;
    }
    this.#length--;

    // console.log(deletedNode.value + " deleted succesfully..");

    deletedNode = null;
  }

  front() {
    return this.#front ? this.#front.value : "NULL";
  }

  rear() {
    return this.#rear ? this.#rear.value : "NULL";
  }

  getLength() {
    return this.#length;
  }

  display() {
    process.stdout.write("->");

    let head = this.#front;

    while (head) {
      process.stdout.write(head.value + "->");

      head = head.next;
    }

    console.log("NULL");
  }
}

const q1 = new Queue();

q1.enqueue(11);
q1.enqueue(12);
q1.enqueue(13);
q1.enqueue(14);
q1.enqueue(15);
q1.display();

q1.dequeue();
q1.dequeue();
q1.display();

console.log("Your Front is : ", q1.front());
console.log("Your Rear is : ", q1.rear());

class Printer {
  #printer;
  constructor() {
    this.#printer = new Queue();
  }

  print(str) {
    this.#printer.enqueue(str);
  }

  currentPrint() {
    return this.#printer.front();
  }

  pendingPrint() {
    this.#printer.display();
  }

  startPrinting() {
    let data;
    while (this.#printer.getLength()) {
      data = this.#printer.front();

      this.#printer.dequeue();
      console.log(data + " printed succesfully ..");
    }
  }
}

const epson = new Printer();

epson.print("JS notes");
epson.print("PY notes");
epson.print("CPP notes");

console.log("Current printing : ", epson.currentPrint());

console.log("Pending prints : ");
epson.pendingPrint()

epson.startPrinting();