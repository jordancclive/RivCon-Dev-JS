/*
-------------------------------------------------------------------------------

                          The Arguments Object

-------------------------------------------------------------------------------

Definition:

        The arguments object is an Array-like object corresponding to the arguments passed to a function.
        
        The arguments object is not an Array. It is similar to an Array, 
        but does not have any Array properties except length. 
        For example, it does not have the pop method. 
        
        However it can be converted to a real Array:
*/
                        var args = Array.prototype.slice.call(arguments);
/*

















*/
