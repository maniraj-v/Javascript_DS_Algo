//--------------------------------------------------------------------------------------------------------
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

// Solution 1 - Merge node2 with node1 alternatively (inplace node1)
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
//--------------------------------------------------------------------------------------------------------------
// Solution 2 - Alternate merging 
// ex: list1 = [1,3,5,7] list2=[2,4] out=[1,2,3,4,5,7]

function alternateMerge(list1, list2){
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }
    const mergedList = new ListNode()  // dummy node for easier handling
    let currentNode = mergedList
    let counter = 0
    while(list1 && list2){
        if(counter %2 === 0){
            currentNode.next = list1
            list1 =list1.next
        }else{
            currentNode.next = list2
            list2 =list2.next
        }
        currentNode =currentNode.next
        counter++
    }
    if(list1){
        currentNode.next = list1
    }else{
        currentNode.next = list2

    }
    return mergedList.next
}
//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
 function hasCycle(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
        slow= slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}
//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
// Merge sort --> split the list into two recursively into small pieces and sort and merge them
var sortList = function(head) {
    if(!head || !head.next){
        return head
    }
    let [right, left] = split(head)
    right = sortList(right)
    left = sortList(left)
    head = sortAndMergeLists(left, right)
    return head
};

/**
Split the linked list:
case 1:
    { head: [4,2,1,3,5] }
    { left: [4,2,1], right: [3,5] }
case 2:
    { head: [4,2,3,5] }
    { left: [4,2], right: [3,5] }
 */

function split(list){
    let slow = list
    let fast = list.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let right = slow.next
    slow.next = null
    let left = list
    return [right, left]
}

/**
  Sort and Join two lists
  ex. list1 =[1,4,5], list2=[1,2,3,6]
  out --> [1,1,2,3,4,5,6]
 */

function sortAndMergeLists(list1, list2){
    let head = new ListNode()
    let tail = head
    while(list1 && list2){
        if(list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }else{
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    while(list1){
        tail.next = list1
        list1 = list1.next
        tail = tail.next
    }
    while(list2){
        tail.next = list2
        list2 = list2.next
        tail = tail.next
    }
    return head.next
}
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
// Rotate a linked list
// Option 1. loop and find n number of nodes
// split position = n - k%n
// loop and split
// loop , join second half with first half

// Option 2. loop and form circular ref and find n number of nodes
// split position = n - k%n
// loop and disconnect circular ref
// Option 1
var rotateRight = function(head, k) {
    // Early return if k=0 or single element
    if(head === null || head.next === null || k=== 0){
        return head
    }
    let length = 0
    let currentNode = head
    while(currentNode){
        length++
        currentNode = currentNode.next
    }
    // Early return if k=0
    if(k%length === 0){
        return head
    }
    // Important :: Split position is from reverse
    let splitPosition = length- k%length // Handle case: k could be more than length
    currentNode = head
    while(splitPosition > 1){
        splitPosition--
        currentNode = currentNode.next
    }
    let temp = currentNode.next
    currentNode.next = null
    const joinNode = head
    head = temp
    while(temp.next){
        temp = temp.next
    }
    temp.next = joinNode
    return head
};

//Option 2 - Form circular list 
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0){
        return head
    }
    let currentNode = head
    let count = 1
    while(currentNode && currentNode.next){
        currentNode =currentNode.next
        count++
    }
    if(k === count){
        return head
    }
    currentNode.next = head
    let splitPosition = count - (k%count)
    while(splitPosition >0 ){
        currentNode = currentNode.next
        splitPosition--
    }
    head = currentNode.next
    currentNode.next = null
    return head
};
console.log(rotateLinkedList(a, 2))
//--------------------------------------------------------------------------------------------------------------
// Palindrome - option 1 - store all values of list in array, then from start and end check equality
// Option 2 : reverse second half and check with head
var isPalindrome = function(head) {
    if(!head.next){
        return true
    }
    // Find second half of list
    let slow = head
    let fast = head.next
    while(fast && fast.next){
        slow= slow.next
        fast = fast.next.next
    }
    const secondHalf = slow.next
    // Reverse second half of list
    let currentNode = secondHalf
    let reversedSecondHalf = null
        while(currentNode){
        const nodesAfterCurrentNode = currentNode.next
        currentNode.next = reversedSecondHalf
        reversedSecondHalf = currentNode
        currentNode = nodesAfterCurrentNode
    }
    // Match all node values of Reversed second half of list with head's first half
    currentNode = head
    while(reversedSecondHalf){
        if(reversedSecondHalf.val !== currentNode.val){
            return false
        }   
        reversedSecondHalf = reversedSecondHalf.next
        currentNode = currentNode.next
    }
    return true
};

// Pattern - "dont adjust pointer for removing nodes"
// 1. Delete duplicates
var deleteDuplicates = function(head) {
    if(!head || !head.next){
        return head
    }
    let currentNode = head
    while(currentNode && currentNode.next){
        if(currentNode.val === currentNode.next.val){
            currentNode.next = currentNode.next.next  // dont adjust pointer since we delete dup
        }else{
            currentNode = currentNode.next
        }
    }
    return head
};

// 2. Delete nodes when matching target val
var removeElements = function(head, val) {
    if(!head){
        return head
    }
    let currentNode = head
    while(currentNode && currentNode.next){
        if(currentNode.next.val === val){
            currentNode.next = currentNode.next.next
            // important note: dont adjust pointer since we deleted node here
        }else{
            currentNode = currentNode.next
        }
    }
    if(head.val === val){
        return head.next
    }else{
        return head
    }
};
