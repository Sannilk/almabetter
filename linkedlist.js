// singly linked list
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
let node1 = new ListNode(8)
let node2 = new ListNode(4)
node1.next = node2


let list = new LinkedList(node1)
console.log(list.head.data)
console.log(list.head.next.data)

// Doubly linked list
function createNode(value) {
    return {
      value: value,
      next: null,
      previous: null,
    };
  }

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  

  insert(value) {
    this.length++;
    let newNode = createNode(value);
  
    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }
  
    this.head = this.tail = newNode;
    return newNode;
  }
  
  print() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.previous?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }
}
  
  const dLinkedList = new DoublyLinkedList();

dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.print();

