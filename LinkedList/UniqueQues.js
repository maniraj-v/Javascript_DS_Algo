// getIntersectionNode - https://leetcode.com/problems/intersection-of-two-linked-lists  -- solved both options, see submissions
// Option 1 double while loop for nodeA, loop thru nodeB and find intersection
// Option 2 when 1 node ends, assign other and continue until match  [when no intersection, both will supposedly have null]
var getIntersectionNode = function(headA, headB) {
    let tempNodeA = headA
    let tempNodeB = headB
    // Assuming no cycles
    while(tempNodeA !== tempNodeB){
        tempNodeA= tempNodeA ? tempNodeA.next : headB
        tempNodeB= tempNodeB ? tempNodeB.next : headA
    }
    return tempNodeA
};

/* Add 2 linked list where linked list is representation of digits in reversed form
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
// This can be enhanced by creating generic function which takes sum and add to result
// But for readability, kept as is
var addTwoNumbers = function(list1, list2) {
    const result = new ListNode()
    let currentNode = result
    let quotient = 0
    while(list1 && list2){
        const sum = list1.val + list2.val + quotient
        const remainder = sum % 10 
        quotient = Math.floor(sum / 10)
        const node = new ListNode(remainder)
        currentNode.next = node
        currentNode =currentNode.next
        list1 = list1.next
        list2 = list2.next
    }
    while(list1){
       const sum = list1.val + quotient
        const remainder = sum % 10 
        quotient = Math.floor(sum / 10)
        const node = new ListNode(remainder)
        currentNode.next = node
        currentNode =currentNode.next
        list1 = list1.next
    }
    while(list2){
       const sum = list2.val + quotient
        const remainder = sum % 10 
        quotient = Math.floor(sum / 10)
        const node = new ListNode(remainder)
        currentNode.next = node
        currentNode =currentNode.next
        list2 = list2.next
    }
    if(quotient){
        const node = new ListNode(quotient)
        currentNode.next = node
    }
    return result.next
};


/*

Merge in between list
Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
    
*/

var mergeInBetween = function(list1, a, b, list2) {
    let currentNode = list1
    let firstHalf = null, lastHalf= null
    let counter = 0
    while(currentNode){
        counter++
        if(counter === a){
            const temp = currentNode.next
            currentNode.next = null
            firstHalf = list1
            currentNode = temp
        }else if(counter -1 === b){
            lastHalf = currentNode.next
            console.log({lastHalf})
            break
        }else{
            currentNode = currentNode.next
        }
    }
    mergeList(firstHalf, list2)
    mergeList(firstHalf, lastHalf)
    return firstHalf
};

function mergeList(nodeA, nodeB){
    let currentNode = nodeA
    while(currentNode && currentNode.next){
        currentNode = currentNode.next
    }
    currentNode.next = nodeB
}
