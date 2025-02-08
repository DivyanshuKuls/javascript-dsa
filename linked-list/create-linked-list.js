// Function to create singly linked list
class node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}
const createLinkedList = (n) => {
    let head = null;

    for(let i=1; i<=n; i++) {
        let newNode = new node(i);

        if(head === null) {
            head = newNode;
        } else {
            let temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newNode;
        }
    }

    return head;
}

console.log(createLinkedList(3));
module.exports = {
    createLinkedList,
    node
}