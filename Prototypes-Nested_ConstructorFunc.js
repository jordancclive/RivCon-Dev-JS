/*
-------------------------------------------------------------------------------------

                          Nested Constructor Functions

-------------------------------------------------------------------------------------

An Example:
*/

//General User Constructor Function:
function CreateTwitterUser(name){
    this.name = name;
    this.handle = '@' + this.name;
    this.followers = [];
}

//always put methods outside of the Constructor Function

CreateTwitterUser.prototype.sendTweet = function(tweet){
  return tweet;
}

CreateTwitterUser.prototype.getHandle = function(){
  return this.handle;
}

//Administrative User:

function CreateAdminUser(name){
    /*1. an empty obj is created
      2. with a {}.__proto__ --> now you have a .prototype object attached to  CreateAdminUser
      3. 'this' is assigned to the CreateAdminUser object
    
      Note: if you use the call method on the CreateTwitterUser's constructer;
      remember that the first parameter of the call is the object that will be 
      assigned to "this" within the function you use call on.
      
      In this case, "this" is associated with the CreateAdminUser function.
      So, in effect, all the "this" references with the CreateTwitterUser
      function will not associate to a standard twitter user, it will be
      associated to the admin function....
    */
    CreateTwitterUser.call(this, name);
    this.admin = true;
}

var david = new CreateAdminUser('david');

/* So if we run ths, we will find that the user variable david
is now linked with the CreateAdminUser prototype object.

We also see that the CreateTwitterUser function successfully 
created all the same regular user fields to this user as well.
*/
dir(david);
/*
  CreateAdminUseradmin
      admin: true
      followers: Array[0]
      handle: "@david"
      name: "david"
      
      __proto__: Object
          constructor: function CreateAdminUser(name)
          __proto__: Object


CreateAdminUser.prototype
  
      Object
          constructor: function CreateAdminUser(name)
          __proto__: Object


Now we need to also have the CreateTwitterUser's prototype
object be attached to this user.  We must do that or non of
the methods associated with a regular user will be 
associated to the admin's user record.

....so there is one more step we have to take....

-------------------------------------------------------------------------------------

Note:  Conceptually we have this:


|-------------------------|                  |----------------------------------|
| An Admin Instance has:  |                  | CreateAdminUser.prototype has:   |
|                         |                  |                                  |
|   .name                 |                  |    .constructor                  |
|   .handle               |                  |                                  |
|   .followers            |                  |                                  |   We want to
|   .admin                |                  |                                  |   break this chain
|                         |                  |                                  |     \/
|                 --------|----------------->|                      ------------|-------------->
|    __proto__    up the prototype chain is       __proto__         up the prototype chain is       Object.prototype
|                 --------|----------------->|                      ------------|-------------->
|-------------------------|                  |----------------------------------|     ||
                                                                                      ||
                                                                                      || We really want the 
|------------------------|                  |-----------------------------------|     || chain to go here.
|  A User Instance has:  |                  | CreateTwitterUser.prototype has:  |     ||
|                        |                  |                                   |     ||  
|    .name               |                  |      .constructor                 |<---- |  
|   .handle              |                  |     .sendTweet method             |<-----|       
|    .followers          |                  |      .getHandle method            |       
|                        |                  |                                   |
|                  ------|----------------->|                        -----------|------------->
|     __proto__    up the prototype chain is       __proto__         up the prototype chain is       Object.prototype
|                  ------|----------------->|                        -----------|------------->
|------------------------|                  |-----------------------------------|


-------------------------------------------------------------------------------------

\*

//Take a look at the following first:

CreateAdminUser.prototype = new CreateTwitterUser();
      
var karen = new CreateAdminUser('karen');


dir(karen);

// CreateAdminUser
//     admin: true
//     followers: Array[0]
//     handle: "@karen"
//     name: "karen"
//     __proto__: CreateTwitterUser           //The problem is we have extra properties in the 
//         followers: Array[0]                // __proto__ object that really should only be in the instance.
//         handle: "@undefined"                          
//         name: undefined
//         __proto__: Object
//             constructor: function CreateTwitterUser(name)
//             getHandle: ()                                     //<---now there is access to
//             sendTweet: (tweet)                                //    a std user's methods 
//             __proto__: Object

            

var obj = Object.create({name:'Vin'});
dir(obj);

// Object
//   __proto__: Object
//       name: "Vin"
//       __proto__: Object
      
         






*/
