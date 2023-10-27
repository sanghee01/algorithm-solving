class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }

  search(index) {
    return this.#search(index)[1]?.value; // [1] : current만 필요하기에. 존재하면 그거의 value
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }
  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      //index가 0일 때
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // 삭제하고자 하는 대상이 없으면 그냥 아무것도 안함
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.search(6)); // undefined
ll.remove(4);
console.log(ll.search(4)); // 6
ll.remove(4);
console.log(ll.search(4)); // undefined
console.log(ll.remove(4)); // undefined
console.log("hi");
