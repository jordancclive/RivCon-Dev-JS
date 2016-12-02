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
        
                .			main.css      vinDoc.pdf
                ..			game.js			
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

If you want to see our previous commits use-->		git log

	commit 26a9362745b9b221ae7d99286cc4160b60925cf7
	Author: rivermanvr <vrgit@consulting.com>
	Date:   Thu Dec 1 14:12:58 2016 -0500

	    our intial commit
	
---------------------------------------------------------------------

Let's add another file to this project directory

	Type:  mv ../2501_JuiceDrop.jpg ./		
					  -->	command:	mv = move
						Argument:	from directory/file name
						Argument:	to directory

	Let's list the files in the directory:  ls
	
		2501_JuiceDrop.jpg	index.html		vinDoc.pdf
		game.js			main.css
	
              ---------------------------------------------------	
	
	Let's add the new file into the staging area-->		git add 2501_JuiceDrop.jpg
	
	...and look at our status-->				git status
	
		On branch master
		Untracked files:
  		  (use "git reset HEAD <file>..." to unstage)

			new file:	2501_JuiceDrop.jpg

		nothing added to commit but untracked files present (use "git add" to track)			
	
              ---------------------------------------------------	
	
	..lets commit the file-->				git commit -m ".jpg addition"
	
	result:
	
		[master a861535] .jpg addition
 		1 file changed, 0 insertions(+), 0 deletions(-)
 		create mode 100644 2501_JuiceDrop.jpg

---------------------------------------------------------------------

Deleting a file form our project directory:

	git rm <filename>	--->	git rm vinDoc.pdf	

	Look at the status:
	
		git status
		On branch master
		Changes to be committed:
		  (use "git reset HEAD <file>..." to unstage)

			deleted:    vinDoc.pdf				<-- 	The file is removed, and
										added to the staging area.										    
	     ---------------------------------------------------		
	     									You can see the deletion in the          
		2501_JuiceDrop.jpg	index.html			<-- 	following "ls" command result.
		game.js			main.css
							
              ---------------------------------------------------	

	The next step is to commit the removal.		-->	git commit -m "removing the .pdf"	
	
	The result:
	
		[master f22ec4b] removing the .pdf
		 1 file changed, 0 insertions(+), 0 deletions(-)
		 delete mode 100644 vinDoc.pdf

---------------------------------------------------------------------

Let's look at the log at this point:				-->	git log

		commit f22ec4b32da3e9e9a5579840d925d930fa85e3d0
		Author: rivermanvr <vrgithub@riversconsulting.com>
		Date:   Thu Dec 1 21:44:53 2016 -0500

		    removing the .pdf

		commit a8615357484bcf752700c0f99375fb9a46fc0061
		Author: rivermanvr <vrgithub@riversconsulting.com>	<--	This is the history of what we have done so far.
		Date:   Thu Dec 1 16:57:12 2016 -0500

		    adding a document

		commit ff34c753f21a02477d409ad9e6613ed0e0550aec
		Author: rivermanvr <vrgithub@riversconsulting.com>
		Date:   Thu Dec 1 14:28:53 2016 -0500

		    .jpg addition

		commit 26a9362745b9b221ae7d99286cc4160b60925cf7
		Author: rivermanvr <vrgithub@riversconsulting.com>
		Date:   Thu Dec 1 14:12:58 2016 -0500

		    our intial commit





*/
