// Deep copy of linked list with Random pointer
var copyRandomList = function(head) {
    if (!head) return null;

    // Step 1: Interweave nodes
    let temp = head;
    while (temp) {
        let copy = new Node(temp.val);
        copy.next = temp.next;
        temp.next = copy;
        temp = copy.next;
    }

    // Step 2: Assign random pointers
    temp = head;
    while (temp) {
        if (temp.random) {
            temp.next.random = temp.random.next;
        }
        temp = temp.next.next;
    }

    // Step 3: Separate the lists
    let dummy = new Node(-1), copyTail = dummy;
    temp = head;
    while (temp) {
        copyTail.next = temp.next;
        copyTail = copyTail.next;
        temp.next = temp.next.next;
        temp = temp.next;
    }

    return dummy.next;
};

### 🧩 Original Linked List

Consider the following linked list:

csharp

CopyEdit

`1 → 2 → 3 → 4 → 5 → null`

With the corresponding `random` pointers:

arduino

CopyEdit

`1.random → 3
2.random → 1
3.random → 5
4.random → 2
5.random → 4`

* * * * *

### 🔄 Step 1: Interweave Original and Copied Nodes

We create a copy of each node and insert it immediately after the original node:

matlab

CopyEdit

`1 → 1' → 2 → 2' → 3 → 3' → 4 → 4' → 5 → 5' → null`

Here, `1'`, `2'`, etc., are the newly created nodes.

* * * * *

### 🔗 Step 2: Assign Random Pointers to Copied Nodes

We set the `random` pointers for the copied nodes. Since each copied node is immediately after its original, we can assign the `random` pointer of `node.next` to `node.random.next`:

-   `1'.random = 3'`

-   `2'.random = 1'`

-   `3'.random = 5'`

-   `4'.random = 2'`

-   `5'.random = 4'`

* * * * *

### ✂️ Step 3: Separate the Original and Copied Lists

Finally, we separate the interwoven list into two distinct lists:

**Original List:**

csharp

CopyEdit

`1 → 2 → 3 → 4 → 5 → null`

**Copied List:**

matlab

CopyEdit

`1' → 2' → 3' → 4' → 5' → null`
