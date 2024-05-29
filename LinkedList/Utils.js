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

// Remove Nth node from end of the list
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
function removeNthFromEnd(head, n) {
    let fast = head
    let slow = head
    // Fast forward until n places
    while(n>0){
        fast = fast.next
        n--
    }
    // If fast is null, remove node is first position
    if(fast === null){
        return head.next
    }
    // Loop until fast node reaches null, then slow will be (n-1) from last
    while(fast && fast.next){
        fast = fast.next
        slow = slow.next
    }
    // removing nth from last
    slow.next = slow.next.next
    return head
}
