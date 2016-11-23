/* The Command Line:  AKA: Console or Terminal.


What is a Graphical User Interface (GUI)?

        Utilizes graphics (like icons) to interact with the O/S and perform tasks.  ...like opening & closing programs.
        
        Certain tasks in a GUI are cumbersome....so you might use a CLI instead...


What is a Command Line Interface (CLI)?

        There are no graphics or icons.  
        
        It is a text based interface that allows one to interact with the O/S.  
        You would not use a mouse.  You would type commands on the keyboard.
        
        Advantages:
        
        - Speed.
        - System Resources.  You use significantly less resources using a CLI.
        - Diversity.  After learning a CLI, it usually stays consistant (won't change much)
                      other than possibly adding new commands.
        - Flexible & Powerful.  It is possible to run scripts and/or run mini programs that perform tasks.
                      You can also write a one line command that does something in a global kind of way.
                      ....as an example:  copying a whole folder's worth of files from one place to another.
        
        
        
Note:  We will be discussing using the command lne within a UNIX O/S environment.



===============================================================      
                 Anatomy of the Command line
===============================================================   

         rivermans-MacBook-Pro $ rm -f foundations.txt
        |-----------------------|
        
        |-->    This is the Prompt.  ...which is supplied by the command line.
                Gives you information about your working directory or git branch that you are working on.
                It always ends with a '$'.
        ===============================================================   

         rivermans-MacBook-Pro $ rm -f foundations.txt
                                |--|
         
         Next is the Command.  <---|    
         A Command is an instruction that the user supplies that performs an action on the upcoming argument.
         In this case, 'rm' stands for remove.
          ===============================================================   

         rivermans-MacBook-Pro $ rm -f foundations.txt
                                   |--|           

         Next is the Option / Flag.<--| 
         Options are optional.  An Option always starts with a dash and is usually a single character.
            ===============================================================   

         rivermans-MacBook-Pro $ rm -f foundations.txt
                                      |---------------|  
                                      
         Next is the Argument.                     <--| 

        A Command is always followed by an argument.
        


==========================================================================
        command spacebar = brings up spotlight

        In spotlight type iterm.....  will get the iterm command line interface.  
        ....the black screen is called a "shell'
==========================================================================

        A Shell is a program that interprets commands and acts as an intermediary 
        between the user and the inner workings of the operating system (O/S).
        
==========================================================================

  The echo command prints its argument to the screen.
  
              rivermans-MacBook-Pro$ echo foundations
              foundations                                             <---It displays the argument
              
              rivermans-MacBook-Pro$ echo 'Grace Hopper'              <---It displays the argument
              Grace Hopper
              
              rivermans-MacBook-Pro$ echo "Vin                        <---if you do not close the quotes
              >                                                           the system gets stuck
                                                                           use ctrl c to stop the 
                                                                           execution the current cmd
                                                                           or process.
              rivermans-MacBook-Pro$                                  <---which will bring you back to here.
              
              
              NOTE: You could have put in the ending quote on that line with a carrot and the
                    terminal would have finished the command from the previous line as follows:
                    
              rivermans-MacBook-Pro$ echo "vin
              > "
              vin
              
==========================================================================

                Cursor Navigation
                
 ==========================================================================               

                CTRL + a : Move to begining of the command line
                CTRL + e : Move to end
                
                Use Up and Down arrow keys to toggle through previous commands
                
                CTRL + u : Clears current line
                CTRL + l : Clears the terminal window (does not clear history)
                
  ==========================================================================

                Commands
                
 ==========================================================================                    

                ls : List command (lists all the files & the directories from the current directory)
                
                                                   Root 
                                                 Directory
                                               |-----------|
                        rivermans-MacBook-Pro:~ designadmin$ ls
                        Adobe				Dropbox				TC_Near_Uninstall.command
                        Applications			Library				derby.log
                        Calibre Library			Movies				isus
                        Creative Cloud Files		Music				nreal
                        Desktop				Pictures			temp_dvd
                        Documents			Public
                        Downloads			Sites
                        design-admins-Mac-Pro-370:~ designadmin$
                
                ==========================================================================  
                ls + directory : Lists the directories from the argument
                
                ==========================================================================  
                pwd : print working directory
                
                        rivermans-MacBook-Pro:~ designadmin$ pwd
                        /Users/designadmin                                <--- again the rood directory is the active directory.
                                                                               This is the actual path of the root.
                
                ==========================================================================  
                File Path : A files location in the Filesystem
                
                        The File Path:  The path points to the file system location by following the directory tree
                                separated by a delimiting character ('/').  Picture a path like a set of instructions
                                describing how to navigate through the directory tree to access a file.
                
                ==========================================================================  
                Directory : A "folder"
                
                ==========================================================================  
                Standard Output : The output in the Command Line after a command
                
                =========================================================================                
                man + command : Manual, displays the manual for the current command
    
                =========================================================================
                ls -a : Displays all of the "hidden" files in a directory

                =========================================================================
                q : Another "get out of trouble" command (try q when CTRL + C doesn't work

                =========================================================================




















*/
