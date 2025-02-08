/*
 * Created on: Sat Feb 08 2025 06:09:45
 * Last Updated: Sat Feb 08 2025 06:09:45
 *
 * Author: Divyanshu Kulshreshtha
 */


class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

const createLinkedList = (n) => {
    let head = null;
    console.log("n : ", n  );

    for(let i=1; i<=n; i++) {
        console.log("i: ", i);
        let newNode = new node(i);
        console.log("New node: ", newNode);

        if(head === null) {
            console.log("Inside if: ")
            head = newNode;
            console.log("inside if head: ", head);
        } else {
            let temp =  head;
            console.log("inside else:  ", head);
            while(temp.next !=null){
                console.log("inside while : ", head);
                temp = temp.next;
            }
            temp.next = newNode
            console.log("inside else head.next: ", head)
        }
    }
    console.log("head outside : ", head);
    return head;
}

const linkedList = createLinkedList(6);
console.log("Linked List: ", linkedList);

/* 
1. head = null
2. head = node {data: 0, next: null}
3. after creating one node now second node need to be added after first node
4. in second iteration - i=1
5. newNode = node {data: 1, next: null}
6. head.next = newNode
7. head = head.next
9. in third iteration - i = 2
10. newNode = node {data: 2, next: null}
11. head.next = newNode
12. head = head.next

*/

const findLength = (head) => {
    let length = 0;

    let current = head;
    while(current != null) {
        length++;
        current = current.next;
    }

    return length;
}

const findMiddle = (head) => {
    let length = findLength(head);

    let mid = Math.floor(length/2);
    let current = head;

    console.log("Mid before while: ", mid);
    while(mid-- > 0) {
        console.log("mid inside while: ", mid);
        current = current.next
    }

    return current.data;
}

console.log(findMiddle(linkedList))
