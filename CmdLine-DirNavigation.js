/*
-----------------------------------------------------------------------

            Navigating around the Directory Tree

-----------------------------------------------------------------------

The home directory:     rivermans-Mac-Pro-370:~ designadmin$

    ....remember that the tilde shows you the home directory.

-----------------------------------------------------------------------

To change directories, you would use the "cd" command

    First:  let's see where we are:  type: pwd
    
            rivermans-Mac-Pro-370:~ designadmin$ pwd
            /Users/designadmin
            
    Second: let's see what is in this Home directory
    
            rivermans-Mac-Pro-370:~ designadmin$ ls
            
            Adobe				Dropbox				TC_Near_Uninstall.command
            Applications			Library				derby.log
            Calibre Library			Movies				isus
            Creative Cloud Files		Music				nreal
            Desktop				Pictures			temp_dvd
            Documents			Public
            Downloads			Sites    
          
    Third:  let's go into the Documents directory.  It is a directory within the Home directory
    
            rivermans-Mac-Pro-370:~ designadmin$ cd /Users/designadmin/Documents                <-- We used an absolute path.
            rivermans-Mac-Pro-370:Documents designadmin$
            
    Fourth: Let's go back to the Home:
    
            rivermans-Mac-Pro-370:Documents designadmin$ cd                     <-- cd always goes back to the Home directory.
            rivermans-Mac-Pro-370:~ designadmin$
            
    Fifth:  Let's use a relative path:
    
            rivermans-Mac-Pro-370:~ designadmin$ cd Documents      <-- You can type the path relative to the current directory.
            rivermans-Mac-Pro-370:Documents designadmin$
            
    Sixth:  Let's move up two directories to the Users directory.
            Note:  to move up a level use:  ".." and you stll need to use the spearators:  "/"
            
            rivermans-Mac-Pro-370:Documents designadmin$ cd ../..
            rivermans-Mac-Pro-370:Users designadmin$                                                            <-- It worked!
    
-----------------------------------------------------------------------    
            
To make new directories, you would use the "mkdir" command

    First:  I went to the the Documents directory and made the "VinExDir" directory
            I then changed to that new directory and made sure it was empty with the "ls" command 
    
            rivermans-Mac-Pro-370:Documents designadmin$ mkdir VinExDir
            
            rivermans-Mac-Pro-370:Documents designadmin$ cd VinExDir/
            rivermans-Mac-Pro-370:VinExDir designadmin$ ls                  <-- nothing displayes since the directory is empty.
            
    Second: Let's make a few more directories in the "VinExDir" directory   
    
            rivermans-Mac-Pro-370:VinExDir designadmin$ mkdir guessing-game
            rivermans-Mac-Pro-370:VinExDir designadmin$ mkdir test-first
            rivermans-Mac-Pro-370:VinExDir designadmin$ mkdir nodeschool
            rivermans-Mac-Pro-370:VinExDir designadmin$ mkdir file-watcher
            
            rivermans-Mac-Pro-370:VinExDir designadmin$ ls
            
            file-watcher	guessing-game	nodeschool	test-first   <-- all the directories are listed in the VinExDir directory.
    
-----------------------------------------------------------------------    
            
To make new files, you would use the "touch" command   

    First:  Let's go into guessing-game and create some files
    
            rivermans-Mac-Pro-370:VinExDir designadmin$ cd guessing-game/          <-- I used the tab key after a few letters.
                                                                                          ...This autocompletes the line.
            rivermans-Mac-Pro-370:guessing-game designadmin$ touch index.html
            rivermans-Mac-Pro-370:guessing-game designadmin$ touch main.css
            rivermans-Mac-Pro-370:guessing-game designadmin$ touch game.js
            
            rivermans-Mac-Pro-370:guessing-game designadmin$ ls
            
            game.js		index.html	main.css                                                    <-- The files have been created.

    Second: Let's create a few more directories so we can organize the files
            Note:  we can pass multiple arguments into the mkdir command
            
            rivermans-Mac-Pro-370:guessing-game designadmin$ mkdir html css js                          <-- short cut is here.
            rivermans-Mac-Pro-370:guessing-game designadmin$ ls
            
            css		game.js		html		index.html	js		main.css                             <-- we created everything properly.
    
-----------------------------------------------------------------------    
            
To move files, you would use the "mv" command   

    First:  Let's move the files into their proper folders
    
            rivermans-Mac-Pro-370:guessing-game designadmin$ mv index.html html
            rivermans-Mac-Pro-370:guessing-game designadmin$ mv main.css css
            rivermans-Mac-Pro-370:guessing-game designadmin$ mv game.js js
            rivermans-Mac-Pro-370:guessing-game designadmin$ ls
            
            css	html	js                                                    <-- The folders remain.  The files have been moved.

*/
