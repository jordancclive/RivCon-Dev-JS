/*
----------------------------------------------------------------------------------

                          Factory Functions

----------------------------------------------------------------------------------

Definition:

        Allows you to create reusable objects whith pre-defined properties and methods.
        
Example:
*/
                function newUser(handle){
                    var twitterUser = {
                              handle: handle,
                              followers:  [],
                              addFollower:  function(followerHandle){
                                      twitterUser.followers.push(followerHandle);
                              }
                    }
                    
                    return twitterUser;
                }

//              Another way to do this is as follows:

                function newUser(handle){
                    return {
                              handle: handle,
                              followers:  [],
                              addFollower:  function(followerHandle){
                                      this.followers.push(followerHandle);    //<----The 'this' keyword.
                              }  
                    }
                }
