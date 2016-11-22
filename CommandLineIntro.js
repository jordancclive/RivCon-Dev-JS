// The Command Line:  AKA: Console or Terminal.

/*

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
        


*/
