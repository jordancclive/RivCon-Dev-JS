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



*/
