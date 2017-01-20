/*
------------------------------------------------------------------------------------------

                                Git Intro

------------------------------------------------------------------------------------------

Version Control Systems:

        (VCS) is a very wise thing to use. It allows you to:
        
              - revert files back to a previous state, 
              - revert the entire project back to a previous state, 
              - compare changes over time, 
              - see who last modified something that might be causing a problem, 
              - who introduced an issue and when, and more.

------------------------------------------------------------------------------------------

Distributed Version Control Systems:

        In a DVCS (such as Git, Mercurial, Bazaar or Darcs), clients don’t just check out the latest snapshot of the files:
        
                - they fully mirror the repository. 
                  Thus if any server dies, and these systems were collaborating via it, 
                  any of the client repositories can be copied back up to the server to restore it. 
                  Every clone is really a full backup of all the data.

                - Many of these systems deal pretty well with having several remote repositories they can work with, 
                  so you can collaborate with different groups of people in different ways simultaneously within the same project. 
                  This allows you to set up several types of workflows that aren’t possible in centralized systems, 
                  such as hierarchical models.
                  
------------------------------------------------------------------------------------------

Git Basics:

        Conceptually, most other systems store information as a list of file-based changes. 
        These systems (CVS, Subversion, Perforce, Bazaar, and so on) think of the information they keep 
        as a set of files and the changes made to each file over time.
        
        Git doesn’t think of or store its data this way. 
        Instead, Git thinks of its data more like a set of snapshots of a miniature filesystem. 
        Every time you commit, or save the state of your project in Git, 
        it basically takes a picture of what all your files look like at that moment 
        and stores a reference to that snapshot. To be efficient, if files have not changed, 
        
        Git doesn’t store the file again, just a link to the previous identical file it has already stored. 
        Git thinks about its data more like a stream of snapshots.

------------------------------------------------------------------------------------------

The Three States of Git:

        This is the main thing to remember about Git if you want the rest of your learning process to go smoothly. 
        Git has three main states that your files can reside in: 
        
        ...committed, modified, and staged. 
        
        Committed means that the data is safely stored in your local database. 
        Modified means that you have changed the file but have not committed it to your database yet. 
        Staged means that you have marked a modified file in its current version to go into your next commit snapshot.

        This leads us to the three main sections of a Git project: 
        
        ...the Git directory, the working directory, and the staging area.
        
        The Git directory is where Git stores the metadata and object database for your project. 
        This is the most important part of Git, and it is what is copied 
        when you clone a repository from another computer.

        The working directory is a single checkout of one version of the project. 
        These files are pulled out of the compressed database in the Git directory 
        and placed on disk for you to use or modify.

        The staging area is a file, generally contained in your Git directory, 
        that stores information about what will go into your next commit. 
        It’s sometimes referred to as the “index”, but it’s also common to refer to it as the staging area.

        The basic Git workflow goes something like this:

                You modify files in your working directory.

                You stage the files, adding snapshots of them to your staging area.

                You do a commit, which takes the files as they are in the staging area 
                and stores that snapshot permanently to your Git directory.

------------------------------------------------------------------------------------------

                  First Time Setup - Getting started:

------------------------------------------------------------------------------------------

Tool:   git config

        Git comes with a tool called git config that lets you get and set configuration variables 
        that control all aspects of how Git looks and operates. 
        These variables can be stored in three different places:


        /etc/gitconfig file: 
        
                Contains values for every user on the system and all their repositories. 
                If you pass the option --system to git config, it reads and writes from this file specifically.


        ~/.gitconfig or ~/.config/git/config file: 
        
                Specific to your user. 
                You can make Git read and write to this file specifically by passing the --global option.


        config file in the Git directory (that is, .git/config) of whatever repository you’re currently using: 
        
                Specific to that single repository.

        
        Each level overrides values in the previous level, so values in .git/config trump those in /etc/gitconfig.

------------------------------------------------------------------------------------------

Your Identity:

        The first thing you should do when you install Git is to set your user name and email address. 
        This is important because every Git commit uses this information, 
        and it’s immutably baked into the commits you start creating:


        $ git config --global user.name "John Doe"
        $ git config --global user.email johndoe@example.com
        
        Again, you need to do this only once if you pass the --global option, 
        because then Git will always use that information for anything you do on that system. 
        If you want to override this with a different name or email address for specific projects, 
        you can run the command without the --global option when you’re in that project.

        Many of the GUI tools will help you do this when you first run them.

------------------------------------------------------------------------------------------

Your Editor:

        Now that your identity is set up, you can configure the default text editor 
        that will be used when Git needs you to type in a message. 
        If not configured, Git uses your system’s default editor.

        If you want to use a different text editor, such as Emacs, you can do the following:


                $ git config --global core.editor emacs
        
        
        While on a Windows system, if you want to use a different text editor, such as Notepad++, you can do the following:


                On a x86 system

                $ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
                On a x64 system

                $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"

------------------------------------------------------------------------------------------

Checking Your Settings

        If you want to check your settings, you can use the   --->      git config --list command 
        to list all the settings Git can find at that point:


                $ git config --list
                user.name=John Doe
                user.email=johndoe@example.com
                color.status=auto
                color.branch=auto
                color.interactive=auto
                color.diff=auto
                ...
        
        
        You may see keys more than once, because Git reads the same key from different files 
        (/etc/gitconfig and ~/.gitconfig, for example). 
        In this case, Git uses the last value for each unique key it sees.

        You can also check what Git thinks a specific key’s value is by typing git config <key>:

                $ git config user.name
                John Doe
                
------------------------------------------------------------------------------------------

Getting Help

        If you ever need help while using Git, there are three ways 
        to get the manual page (manpage) help for any of the Git commands:


                $ git help <verb>
                $ git <verb> --help
                $ man git-<verb>
                
        For example, you can get the manpage help for the config command by running


                $ git help config
                
                
        These commands are nice because you can access them anywhere, even offline. 
        If the manpages and this book aren’t enough and you need in-person help, 
        you can try the #git or #github channel on the Freenode IRC server (irc.freenode.net). 
        These channels are regularly filled with hundreds of people who are all very knowledgeable 
        about Git and are often willing to help.
                
------------------------------------------------------------------------------------------













*/
