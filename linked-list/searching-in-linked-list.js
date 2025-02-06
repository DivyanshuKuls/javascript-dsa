const {createLinkedList} = require("../linked-list/create-linked-list");

const linkedList = createLinkedList(5);

const searchLinkedList = (head, target) => {
    // let current = head;

    while(head != null) {
        console.log("Head while: ",head);
        if (head.data === target) {
            return true;
        }
        head = head.next;
    }

    return false;
}

const value = searchLinkedList(linkedList, 5);
console.log(value);