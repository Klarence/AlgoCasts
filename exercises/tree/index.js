// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        // const node = new Node(data);
        // this.children.push(data);
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // traverseBreadthFirst
    traverseBF(fn) {
    const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();

            // for(let child of node.children) {
            //     arr.push(child);
            // }
            arr.push(...node.children);
            fn(node);
        }
    }

    // traverseDepthFirst
    traverseDF(fn) {
        const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}



// const node = new Node(1);
// const tree = new Tree();
// tree.root = node;

module.exports = { Tree, Node };
