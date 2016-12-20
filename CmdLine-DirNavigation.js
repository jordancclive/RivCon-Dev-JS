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

-----------------------------------------------------------------------  

To Delete a file in a directory:

            rm -R filename (the current directory)          or          
            rm -R /full pathname/filename                   or
            rm -R /relative path/filename
            
            Note:  if you want to delete a file regardless of the error it will cause:
            
            rm -Rf filename  
            
----------------------------------------------------------------------- 

Turn on and off seeing hidden files:

            Cmd shift .
            
----------------------------------------------------------------------- 

Initiating a program in the console using an alias:


            I would try the same command, but use sudo before the command. 
            This will allow you to run the command as an administrator. 
            You will be prompted for your computer password.

            Additionally, if that doesn't work I would recommend pasting

               alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"
            
            into your bash profile (~/.bash_profile or ~/.bashrc). 
            
            Then if you restart your terminal, you should be able to use the 'subl' command.

            
            -------------------------------------------------------------------------------            
            
            From Karen/Teacher at Fullstack:
            Here is a post on Discuss that goes into a bit more detail:


                        A few people have asked how to use the subl command in the mac terminal. 
                        Unfortunately, just installing Sublime Text won't make this command available, 
                        but fortunately it's easy to implement!

                        From the command line, copy and paste this command:
                        
                        For Sublime Text 3:
                        
                        ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl

                        For Sublime Text 2:
                        
                        ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl

                        If this doesn't work, let me know! I'm assuming that 
                        a) You are using a Mac 
                        b) You installed Sublime in your Applications folder and 
                        c) you have ~/bin directory in your path, which is usually default!

                        --------------------------------------------------------------------

                        Alternate solution: Try pasting this line:

                                    alias subl="/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl"

                        into your bash profile. Your bash profile is usually a hidden file in your ~/ directory 
                        and will have a name like .bashrc. You'll need to restart your terminal for changes to take effect.
                        
                        --------------------------------------------------------------------
                        
 Discourse on this issue:
 
            First email:
 
                         Hi everyone.

                        In some of the videos about git, I saw Karen initiating sublime from 
                        within the console....by typing the command "subl". She followed that with a period 
                        and got the local directory tree to display within the application after it initialized.

                        I can't for the life of me figure our how she got that to work....any ideas.   
                        ....I, obviously, can initiate sublime from the applications menu, but didn't want to do that anymore.


                        ....I tried setting the core.editor within the config command.

                        ...I followed the directions from within the sublime documentation.

                        ...I am now at a loss.

                        Any help would be greatly appreciated.

                        regards,
                        Vince
                                                
                        --------------------------------------------------------------------                       

            Second email:
            
                        Vince:

                        I am assuming you have a mac.

                        When you open your terminal window there is hidden file called .bash_profile

                        Edit the file and insert the following line:

                        ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl

                        I inserted the line before the last line on my list, but every .bash_profile is different.

                        Let me know how it goes.

                        Cheers, 

                        Mauro            
            
                        --------------------------------------------------------------------                
            
            Third email:     
            
                        Hi Mauro,

                        Thank you very much for replying.  Although I could not get what I wanted to work correctly, 
                        I am posting a log of what I discovered as I went through investigating 
                        the information you gave me.....as follows:

                        Background:

                        The snippet:  "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl"  

                              -  points to where sublime is physically located on the machine.
                              -  in my case sublime was located in a different Applications directory (off the Home directory)
                                 so I appended that snippet with the following:  
                                 
                                 ln -s "${HOME}/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl
                                 
                                 -      The additional snippet:   
                                    
                                 /bin/subl  relates to adding "subl" to the bin directory off the root.
                                 
                                 This snippet in essence adds the command "subl" to that folder/directory 
                                 along with the other commands that live there.

                        The terminal window hidden file, in my case, is .profile and not .bash_profile.   

                        What happened:

                        I closed the console (you need to start the console fresh if you want the profile to run for that session).

                        I opened .profile file using Sublime.  As an FYI, when you use open within Sublime you get a finder window.  
                        In order to see hidden file you must do the following:    type:   Cmd + ^ + . 
                        (This means the Cmd key plus hold the shift key then hit the period key).  
                        You will then see the hidden files.

                        I entered and then saved the modified command:  
                        
                        ln -s "${HOME}/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /bin/subl 

                        I opened the console again and the console ran fine but had an error:  

                                         Last login: Wed Dec  7 11:35:47 on ttys000
                                         ln: /bin/subl: Operation not permitted
                                         design-admins-Mac-Pro-370:~ designadmin$



                        ......so the end result is that I am closer to accomplishing what I want to do, 
                        but there is an additional hurdle.  That is I need to figure out how to 
                        get the console to allow me to access and add to the bin file.


                        I am going to keep researching, but I need to take a break from this so i can 
                        continue to move forward with the foundations steps for the next few hours.  
                        If anyone has any ideas, I would greatly appreciate it.

                        regards,

                        Vince

                        --------------------------------------------------------------------   
            
            Fourth email:                          
                        
                        Is the beginning discussion above: Initiating a program in the console using an alias:

*/


