class node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

const createLinkedList = (n) => {
    let head = null;
    for (let i=1; i<=n; i++) {
        let newNode = new node(i);

        if(head == null) {
            head = newNode;
        } else {
            let temp = head;
            while(temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }
    return head;
}

const traverseLinkedList = (head) => {
    let current = head;
    let str = "";
    while (current != null) {
        str += current.data + " "
        current = current.next;
    }

    console.log(str);
}

const ll = createLinkedList(5);

traverseLinkedList(ll);