/* Directories & the Directory Tree

        ==========================================================================

              Directory:  Is a Folder on your computer.  
                  
                        "A grouping of files"
          
        ==========================================================================        

              Filesystem: is the tree like structure starting at the root directory.
                          It has multiple sub-directories with files inside of it.
                    
              The Command Line: is always somewhere in the filesystem.
              
              Note:  the command: "pwd" returns the directory that you are in.

        ==========================================================================        

              File Path:  Contains all the directories needed in sequential order 
                          to find a specific file.
                          
              Each directory in the file path is separated by a forward slash.
              
              as an example:  /Users/Scott/Foundations
                              ^   ^    ^       ^      
                              |   |    |       |
             The root directory   |    |       |
             is in front of this  |    |       You will find your file here.                   
             directory            |    Then go to this directory                         
                                  Go to this directory        

        ==========================================================================        

              There are 2 types of file paths:
              
              Definition: File Paths are "directions" or "instructions" to a specific location in the filesystem.


                    Absolute Path:      contains every directory including the root to access
                                        a specific location in the filesystem
  
                                                as an example:  /Users/Vin/Home/GraceHoper
                                                                ^  ^    ^   ^      ^
                                                                |  |    |   |      |
                                               The root directory  |    |   |      You will find your file here. 
                                               is in front of this |    |   Then go to this directory                   
                                               directory           |    Then go to this directory                         
                                                                   Go to this directory   
                                        
                                        NOTE:  See the Directory Tree (below)
                    
                    
                    Relative Path:      This path relates to the directory that we are currently in.
                    
                                        Let's use the command "pwd" to get the current working directory.
                                        and assume we got ---> /Users/Vin/Home/GraceHoper
                                        
                                        Let's also assume that we want to go to Karen's directory. (see below)
                                        In words, we would have to go up 3 directories to "Home" and then
                                        down 1 directory to "Karen".
                                        
                                        ...to go up and access the directory above the current one use ".."
                                        ...remember the "/" as a separator for multiple moves.
                    
                                        ...so to get to & access a file in "Karen" --->  ../../../Karen


        ==========================================================================        

                          Directory Tree Like Structure

                                                 /                                         <---Root Directory is the "/"
              -------------------------------------------------------------------------
                 |                     |                     |                      |
                bin                   etc                   usr                   Users    <---1st Level Directories
                 |                                           ^                      |
          ---------------------                              |         --------------------------
          |       |        |                                 |             |        |         |
          ls     echo     pwd                       The unix system       Vin     Scott     Karen
                                                       resources           |
     (This is the binaries directory)                 dir is here      -----------
                                                                          home
                                                                           |
                                                  ------------------------------------------------------
                                                        |             |             |             |
                                                    Documents   Applications    Fullstack   GraceHopper





        ==========================================================================        

                        Important Directories
                        
                        
        *       The /bin or /sbin - both directories contain basic commands & programs needed to achieve a minimal working 
                environment upon booting your machine.
                
                They mostly contain system commands.  "sbin" also contains administrative utilities.
                Most things are compiled programs.
                
                like: ---->  echo, pwd and the ls (list) commands.  They are all located in the bin directory.
                
                
        *       The /usr - unix system resources directory is one of the largest directories in the filesystem.
                It includes folders that look similar to folders in the root directory such as /usr/bin and /usr/local/bin.
                
                The /usr folder is used to store all non-essential programs.  ex: documentation, libraries & other data 
                that is not required for the most minimal usage on the O/S.
                
                The user/local/bin directory is the recommended library to install Node.js when using the general installer.


        ==========================================================================    
        
        
        





*/
