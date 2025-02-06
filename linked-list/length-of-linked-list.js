const {createLinkedList} = require("../linked-list/create-linked-list");

const linkedList = createLinkedList(10);

const findLinkedListLength = (head) => {
    let current = head;
    let count = 0;

    while(current != null) {
        count++;
        current = current.next;
    }

    return count;
}

const linkedListLength = findLinkedListLength(linkedList);
console.log(linkedListLength);