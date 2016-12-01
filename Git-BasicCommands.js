/*
---------------------------------------------------------------------

                    Git on the Command Line
                    
                        -- Commands --

---------------------------------------------------------------------

Assumptions:

        - Have a directory created where I have created a few files that I will be tracking:  VinTestRepo
        
                Crested as follows: In the gitRepositories directory created:  mkdir VinTestRepo

        - Created the followig files in VinTestRepo directory:
                
                - index.html      <-- touch index.html
                - main.css        <-- touch main.css
                - game.js         <-- touch game.js     

        - Let's now look at that directory using "ls":
        
                game.js         main.css    
                index.html      vinDoc.pdf

---------------------------------------------------------------------

Initialize git inside the project directory:

        git init
        
        return message: Initialized empty Git repository in /Users/Documents/gitRepositories/VinTestRepo/ .git/
        
        This creates a hidden folder called .git where git will keep all of the version snapshots.
        
        Check it out:  ls -a
        
                .			    main.css      vinDoc.pdf
                ..			  game.js			
                .git			index.html
                
---------------------------------------------------------------------

Let's check the status of this Directory:

        git status
        
        The result:
        
                On branch master                                                          <-- This is the branch you are on.
                Untracked files:                                                          <-- This shows your untracked files.
                  (use "git add <file>..." to include in what will be committed)

                        main.css      
                        vinDoc.pdf                                          <--  To track these files, we need to add
                        game.js			                                             them to the staging area.
                        index.html

                nothing added to commit but untracked files present (use "git add" to track)

---------------------------------------------------------------------

Staging Area .....we need to now add the files to the staging area.

        git add <file name>     or      git add .  
                                                (using the "." will add all the directory files to the staging area)
                                                
        As an example:  git add main.css
        
        The result:
        
                On branch master

                initial commit

                Changes to be committed:
                  (use "git rm --cached <file>..." to unstage)

	                      new file:   main.css
 
                 Untracked files:                                      
                  (use "git add <file>..." to include in what will be committed)
 
                        vinDoc.pdf                  
                        game.js			         
                        index.html
 
              ---------------------------------------------------
        
        Let's add the rest of the files:   Type-->   git add .
        
        Look at git status now:
        
                On branch master

                initial commit

                Changes to be committed:
                  (use "git rm --cached <file>..." to unstage)

	                      new file:   main.css
                        new file:   vinDoc.pdf                  
                        new file:   game.js			         
                        new file:   index.html        
 
          All of our files are in the staging area.
 
 
---------------------------------------------------------------------
 
 We now need to commit the files from the staging area.
 
        git commit -m <"message">                       <-- The -m option allows you to add a message.
 
        Type-->   git commit -m "our initial commit"
        
        Result:
        
                [master a861535] our initial commit
                4 files changed, 0 insertions(+), 0 deletions(-)
                create mode 100644 main.css
                create mode 100644 vinDoc.pdf
                create mode 100644 game.js	
                create mode 100644 index.html 

        Let's check our status now:

                git status

                result:

                        On branch master
                        nothing to commit, working tree clean
                
---------------------------------------------------------------------














*/
