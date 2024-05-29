// Reorder the list
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
var reorderList = function(head) {
    if(head === null || head.next === null) return
    // Split and get second half
    let secondHalf = split(head)
    // Reverse the second half
    secondHalf = reverse(secondHalf)
    // Merge second half with head alternatively
    alternateMerge(head, secondHalf)
};

// Finding the middle of LinkedList or split node into two
function split(node){
    let slow = node
    let fast = node
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

// Reverse the LinkedList
function reverse(currentNode){
    let reverseList = null
    while(currentNode){
        const nodesAfterCurrentNode = currentNode.next
        currentNode.next = reverseList
        reverseList = currentNode
        currentNode = nodesAfterCurrentNode
    }
    return reverseList
}

// Merge node2 with node1 alternatively (inplace node1)
function alternateMerge(node1, node2){
    while(node2 && node2.next){
        const bkupNode2Next = node2.next
        node2.next = node1.next
        node1.next = node2
        // move pointer by 1 for node 2
        node2 = bkupNode2Next
        // move pointer by 2 for node 1
        node1 = node1.next.next
    }
}
