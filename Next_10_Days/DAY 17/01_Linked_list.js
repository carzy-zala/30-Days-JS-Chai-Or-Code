class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  #heading;
  constructor() {
    this.#heading = null;
  }

  addNode(data) {
    let newNode = new Node(data);
    if (!this.#heading) {
      this.#heading = newNode;
    } else {
      let head = this.#heading;

      while (head.next) {
        head = head.next;
      }

      head.next = newNode;
    }

    console.log(`${data} added succesfully ...`);
    
    newNode = null;
  }

  removeNode() {
    let head = this.#heading;

    while (head.next.next) {
      head = head.next;
    }

    let deletedNode = head.next;
    console.log(`${deletedNode.value} is removed succesfully`);

    deletedNode = null;

    head.next = null;
  }

  display() {
    let head = this.#heading;

    while (head) {
      console.log(head.value);
      head = head.next;
    }
  }
}

let LL = new LinkList();

LL.addNode(1);
LL.addNode(2);
LL.addNode(3);
LL.addNode(4);
LL.addNode(5);

LL.display();

LL.removeNode();
LL.removeNode();

LL.display();
