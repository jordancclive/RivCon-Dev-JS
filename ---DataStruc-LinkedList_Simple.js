/*
------------------------------------------------------------------------------------

                          Simplified Linked List

------------------------------------------------------------------------------------
*/

//Simplifed Linked List:

console.clear();

function Node(value){
  this.value = value;
  this.next = null;
}

function LL(){
  this.head = null;
}

LL.prototype.addToHead = function(value){
   if(!this.head)
     this.head = new Node(value);
  else {
     var node = new Node(value);
     node.next = this.head;
     this.head = node;
  }
}

LL.prototype.traverse = function(fn){
  if(!this.head)
    return;
  var current = this.head;
  while(current){
    fn(current.value);
    current = current.next;
  }
}

var ll = new LL();
ll.addToHead('foo');
ll.addToHead('bar');
ll.addToHead('bazz');
ll.traverse(function(value){
   console.log(value);
});
