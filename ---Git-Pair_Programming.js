/*
--------------------------------------------------------------------------

                              Pair Programming

--------------------------------------------------------------------------

Assumption:

      - Vin & Bill are going to pair program
      
      - If they both fork a repo from Fullstack, we all are already collaberators on it.
        
        If They create a repo, then they have to designate the other as a collaberator.
      
      - both have forked a repository from Fullstack on some topic.  
        ... so they both have their own copy of the repository.
        
      - They both clone their respective repositories to their
        local machines.
        
        so far this is what we have:
        
        
              Vin                                     Bill                              Fullstack

               |                 <-----                 |                 <-----  FS - Repository Topic #1
               |                                        |                               on git.com
          Vin's fork of                           Bill's fork of 
      FS - Repository Topic #1               FS - Repository Topic #1
            on git.com          \            /       on git.com
               ^                 \          /            ^
               ^                  ----<->---             ^
               |                 /          \            |
               |                /      ^     \           |
               |               /       |      \          |
           git clone (origin)          |        git clone (origin)
                                       | 
    -----------------------------      |   -----------------------------
                                       |
                                       | <--Want to also create this connection
                                       
   We will need to add an additional remote.  
    
   The original on is "origin master" which is to their own individual forks.

   The steps:

               Will do this  ---> git remote add 
               will name it whatever you want.  ex:  bill
               and put the url to bill's repository.
               
               The full statement:      git remote add bill <https address of bill's repository on github>
               
               If you want to see what remotes exist type:    git remote -v
               
               Now you can push to either origin or the other person's repository:  git push <the other person> master
 
 
--------------------------------------------------------------------------

                              The Workflow

--------------------------------------------------------------------------

Step 1:

          The navigator (N) = Makes the coding suggestions; gives instruction.

          The Driver (D) = Has the keyboard and is typing.


Step 2:   It is time to change roles.
        
          git add .
          git commit 
          git push the changes to the OTHER persons repository.
          (optional) push the changes to your own repository.
          
          Now the other person can easily get the changes by git pull
          and become the driver.  ...back to step 1.
          
--------------------------------------------------------------------------

                              The Workflow
                              
                          The problems that arise

--------------------------------------------------------------------------          
          
git stash

        Takes all of your changes (from git add, that haven't been committed yet) in the working directory and saves it.
        So after running the command, you look at your files, the changes are rolled back to the prior changes.
        
git stash apply

        Will apply the last stash from a stash stack and apply it back to the working directory.
        
--------------------------------------------------------------------------      
 










*/
