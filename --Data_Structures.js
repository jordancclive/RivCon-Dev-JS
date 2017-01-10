/*
---------------------------------------------------------------------------------

                                Stacks & Queues

---------------------------------------------------------------------------------

Stacks:

        Like a stack of books stacked on a desk.  You stack them from bottom to top
        and you remove them from top to bottom.
        
              - Elements are sorted in insertion order
              - Last in, first out
              - Elements have no index
              - Can only add to the top and remove from the top.  (push in & pop out)             
              
              - Useful when you want to reverse the order of elements.  (undo on your computer)
              
Queues

        A single file line.
        
              - Have a front and a back.
              - Can add to the back and remove from the front.  
              - adding: enqueueing and removing: ddequeueing
              
              - elements are sorted by insertion order
              - FIFO
              - Elements have no index
              - Can only add to back and remove from front.
              
              - A print queue. 
              
 ---------------------------------------------------------------------------------

                               Linked Lists
                               
---------------------------------------------------------------------------------    
        
A List:

        Dictionary: A number of connected items or names written or printed consecutively.

        In Computer Science:  
                
                an ordered collection of values (aka: items, entries, elements)
                
                Where a value may occur more than once.
                
A linked List:  

        A sequence of nodes where one is a reference and the other is a reference to the next item on the list.
        
        The list ends with a reference pointer of null.
        
        Usually there is an extra reference that points to the beginning called 'head'
              
Behavior:

        You can add and remove an element.
        
        find an element and do operations on elements
        
        
How are they implemented:

        - Arrays or Linked Lists.
        
        The problem with arrays is when you have to add an element in the middle of the list.  
        You have to shift the elements down to make room.
        
        An array's size is fixed after you create it.
        
 ---------------------------------------------------------------------------------

                               Binary Search Tree
                                     AKA
                               Binary Sorted Tree
                               
----------------------------------------------------------------------------------     

A tree is called a Binary Search Tree (BST) if each node 'N' is such that value at 'N'
is greater than every value in the left sub tree and is less than or equal to every value 
in the right sub tree.

----------------------------------------------------------------------------------   

                                  Parent node 'N'
                                        38
                                      /    \
                                    21      45
                                    / \     / \
                                  13   23  39  56

-------------------------------------------------

take this:   23, 35, 80, 2, 13, 56, 11, 60, 71

and make a BST:

                                        23
                                      /    \
71>23 go R                           2      35
71>35 go R                            \       \
71> 56 go R                            13      80
71> 60 go R                           /        /
add                                 11       56               
                                               \
                                                60
                                                  \
                                                   71

 ---------------------------------------------------------------------------------

                                Hash Tables
                               
----------------------------------------------------------------------------------  

Hash tables are used when you need speedy insertion, deletion and look up of elements is priority.

    A hash table is an array combined with a function (called a hash function).
    
         key |
             |
      -----------------------       
          Hash function
      -----------------------  
                  |
                  |Hash Value (an integer that maps to a particualr index in the array)
                  
        
        You use this function to determine where you will store something and retrieve something from the array.
        
  Hash function:
 
              //hash on first letter of string  A ---> index 0
                                                B            1
                                                
              A problem is if you have 2 elements starting with A.  It is called a 'collision'.
              
Handling collisions:

        - Linear probing - if a collision occurs, the new element is assigned to the 
                           next available free index on the table.
                           
                           Once a collision occurs, you have a high probability of many 
                           collisions happening.  ....called 'clustering'.
                           
        - separate chaining - In this case the array contains pointers to linked-lists.
                              results in an O of N/k  n = elements in the table, j is the size of the hash table.
        
        
        

        

*/
