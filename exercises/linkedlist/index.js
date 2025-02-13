// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // const node = new Node(data, this.head);
        // this.head = node;
        this.head = new Node(data, this.head);
         // this.insertAt(data, 0);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
        // return this.getAt(0)
    }

    getLast(){
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        while (node) {
            if(!node.next){
                return node;
            }
            node = node.next;
        }
        // return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
        // this.removeAt(0)
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return
        }

        let previous = this.head;
        let node = this.head.next;

        // while(node){
        //     if(!node.next){
        //         previous.next = null;
        //     }
        // }

        while(node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
        // this.removeAt(this.size() - 1);

    }

    insertLast(data) {
        // if(!this.head){
        //     this.head = new Node(data);
        // }
        const last = this.getLast();
        if(last) {
            last.next = new Node(data);
        } 
        else {
            this.head = new Node(data);
        }
        // this.insertAt(data, this.size() - 1);
    }

    getAt(index) {
        // if(!this.head) {
        //     return null;
        // } // not needed since we return null if node = null

        // if(index > size(index)){
        //     return null;
        // }

        let counter = 0;
        let node = this.head;
        
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if(!this.head) {
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
        }

        const previous = this.getAt(index -1);
        // if(!previous || !previous.next.next) {
        //     return
        // }
        // previous.next = previous.next.next;

        if(this.getAt(index) !== null){
            if(previous !== null) {
                if(this.getAt(index + 1)){
                    previous.next = this.getAt(index + 1);
                } else {
                    previous.next = null;
                }
            }
        }
    }

    insertAt(data, index) {
        if(!this.head){
            this.head = new Node(data);
            return
        }
        if(index === 0){
            // let node = this.head;
            // this.head = new Node(data);
            // this.head.next = node;
            this.head = new Node(data, this.head);
            return
        }
        const previous = this.getAt(index - 1) || this.getLast();
        // const node = this.getAt(index);
        const node = new Node(data, previous.next);
        previous.next = node;
        // const next = this.getAt(index + 1);
        // if(!previous.next.next) {
        //     return
        // }
        // if(index = this.getLast) {
        //     previous.next.next = null;
        // }

        // currentIndex.next = previous.next.next;


    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;

        while(node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    
    
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

// const list = new LinkedList {
//     list.ins    
// }

module.exports = { Node, LinkedList };
