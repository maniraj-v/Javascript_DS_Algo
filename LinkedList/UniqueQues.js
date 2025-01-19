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
