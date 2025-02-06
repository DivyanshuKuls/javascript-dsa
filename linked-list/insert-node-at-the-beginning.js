const { createLinkedList,node } = require("./create-linked-list");

const linkedList = createLinkedList(6);

const insertAtBeginning = (head, value) => {
    let newNode = new node(value);

    newNode.next = head;

    head = newNode;

    return head;
}

const newLinkedList = insertAtBeginning(linkedList, 48);
console.log(newLinkedList);