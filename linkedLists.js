class LinkedList {
  constructor() {
    this.head = null
  }

  // returns the first node in the list
  getHead() {
    if (this.head === null) {
      console.log("Don't have any node in the list.")
      return null
    } else {
      return this.head
    }
  }

  // returns the last node in the list
  getTail() {
    if (this.head === null) {
      console.log("Don't have any node in the list.")
      return null
    }

    let currentNode = this.head

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      const lastNode = this.getTail()
      lastNode.nextNode = newNode
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value)
    
    if (this.head) {
      newNode.nextNode = this.head
    }

    this.head = newNode
  }

  // returns the total number of nodes in the list
  size() {
    if (this.head === null) {
      return 0
    }

    let currentNode = this.head
    let listLength = 1

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
      listLength ++
    }
    return listLength
  }

  // returns the node at the given index
  at(index) {
    const lengthOfList = this.size()

    if (index < 0 || index >= lengthOfList) {
      console.log("Invalid index.")
      return null
    }

    let currentNode = this.head
    let currentIndex = 0

    for (currentIndex; currentIndex < index; currentIndex++) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  // removes the last element from the list
  pop() {
    if (this.head === null) {
      console.log("Don't have any node in the list.")
      return
    }

    const lengthOfList = this.size()
    
    if (lengthOfList === 1) {
      this.head = null
      return
    }
    
    let secondLastNode = this.head

    for (let i = 0; i < lengthOfList - 2; i++) {
      secondLastNode = secondLastNode.nextNode
    }
    secondLastNode.nextNode = null
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    if (this.head === null) {
      return false
    }

    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.nextNode
    }
    return false
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    if (this.head === null) {
      return null
    }

    let currentNode = this.head
    let index = 0

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index
      } else {
        currentNode = currentNode.nextNode
        index++
      }
    }
    return null
  }

  // this method represents your linked list object as a string. It shows all the nodes in the correct order, followed by null at the end
  toString() {
    if (this.head === null) {
      console.log("Don't have any node in the list.")
      return
    }

    let result = ""
    let currentNode = this.head

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode
    }
    result += `null`
    return result
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    const lengthOfList = this.size()

    if (index > lengthOfList || index < 0) {
      console.log("Invalid index.")
      return
    }

    if (index === 0) {
      this.prepend(value)
      return
    }

    if (index === lengthOfList) {
      this.append(value)
      return
    }

    let previousNode = this.head
    for (let i = 0; i < index - 1; i++) {
      previousNode = previousNode.nextNode
    }

    const newNode = new Node(value, previousNode.nextNode)
    previousNode.nextNode = newNode
  }

  // that removes the node at the given index
  removeAt(index) {
    const lengthOfList = this.size()

    if (index >= lengthOfList || index < 0) {
      console.log("Invalid index.")
      return
    }

    let previousNode = null
    let currentNode = this.head
    let currentIndex = 0

    if (index === 0) {
      this.head = this.head.nextNode
      return
    }

    while (currentIndex < index) {
      previousNode = currentNode
      currentNode = currentNode.nextNode
      currentIndex++
    }

    previousNode.nextNode = currentNode.nextNode
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

export { LinkedList }