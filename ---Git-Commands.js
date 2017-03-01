/*
---------------------------------------------------------------------------------

                                    Git Commands

---------------------------------------------------------------------------------

Commands you should already be familiar with:

        - git init
        - git add
        - git commit
        - git push
        - git pull
        - git status
 
        - git branch
        - git checkout

---------------------------------------------------------------------------------

git branch:

        shows you how many branches that you have and the one that you are on.



git checkout:

        git checkout -b vince-add-modules-seed
                      ^     ^
                      |     |
                      |     This is what the branch will be called
       checking out a branch
 
 
       git push --set-upstream origin vince-add-modules-seed
       

git stash:

        working on a branch and need to leave without finishing.  If you git stash,
        the command move the changes (wither in your working directory or even if they are staged
        to a stash stack of unfinished changes.
        
        The result:  you have a clean directory and can do what you want.
        
        If you type 'git stash list' and see everythig on your stack,
        when you are ready you can type: 
        
                  git stash apply:   applies the changes but the changes stay on the stack
                  git stash pop:     removes the changes from the stack
                  
                  git will tell you if you have conflicts and ask you to resolve them.
                  
         You can also:
                  
                  git stash clear:    removes all of them
                  git stash drop:     you can pick what to drop
                  git stash branch:   created a new branch and you can drop what you want on it.
                  
---------------------------------------------------------------------------------

git reset:

        Let's say you commited changes and now realize that you made a mistake.
        
        How it works:
        
        
          ---------------------------------------------------------------  
                                                             HEAD  
                                                              |
                eb43bf8             9e5e6a4                38eb946
                            <--                  <--
              file.text-v1        file.text-v2          file.text-v3      
  
  
          git repository:
          ---------------------------------------------------------------    
          
                 HEAD                INDEX             Working Directory
              
              file.text-v3        file.text-v3          file.text-v3                
          
          ---------------------------------------------------------------            
          ---------------------------------------------------------------       
 
        The first git reset, points the head at the previous branch:
        
        Note:   you can stop here by typing:   git reset --soft
                You can then change things and recommit.
        
        
        
          ---------------------------------------------------------------  
                                       HEAD  
                                        |
                eb43bf8             9e5e6a4                38eb946
                            <--                  <--
              file.text-v1        file.text-v2          file.text-v3      
  
  
          git repository:
          ---------------------------------------------------------------    
          
                 HEAD                INDEX             Working Directory
              
              file.text-v2        file.text-v3          file.text-v3                
          
          ---------------------------------------------------------------            
          ---------------------------------------------------------------          
        
        
        The second git reset, points the head at the previous branch:  git reset [--mixed]
        
        Note:   By default git reset will stop here
                You can then change things and recommit.
        
        
        
          ---------------------------------------------------------------  
                                       HEAD  
                                        |
                eb43bf8             9e5e6a4                38eb946
                            <--                  <--
              file.text-v1        file.text-v2          file.text-v3      
  
  
          git repository:
          ---------------------------------------------------------------    
          
                 HEAD                INDEX             Working Directory
                          copies->
              file.text-v2        file.text-v2          file.text-v3                
          
          ---------------------------------------------------------------            
          ---------------------------------------------------------------   



        You can also git reset --hard:
        
        Note:   Removes and deletes the changes and this cannot be undone
        
        
        
          ---------------------------------------------------------------  
                                       HEAD  
                                        |
                eb43bf8             9e5e6a4                38eb946
                            <--                  <--
              file.text-v1        file.text-v2          file.text-v3      
  
  
          git repository:
          ---------------------------------------------------------------    
          
                 HEAD                INDEX             Working Directory
                          copies->            copies->
              file.text-v2        file.text-v2          file.text-v2                
          
          ---------------------------------------------------------------            
          ---------------------------------------------------------------   

---------------------------------------------------------------------------------

git revert:

        Which you should only be done on public branches because it shows what you did.
        
        As opposed to reset which destroys the audit trsil.
        
        Revert resets thing by adding a new commit of the older master.
        
        
        
              before:                                   after:
                      hotfix                                   feature
                        |                                         | 
                O - O - O      commits                O - O - O - O 
        O - O                                  O - O
                O - O                                 O - O
                    ^                                     ^
                  master                                master

---------------------------------------------------------------------------------

git merge


              before:                                   after:
                     feature                                   feature
                        |                                         | 
                O - O - O      commits                O - O - O - O    <----merges and if there are conflicts
        O - O                                  O - O              ^         you have to resolve them
                O - O                                 O - O ------|
                    ^                                     ^
                  master                                master

---------------------------------------------------------------------------------

git rebase          Note: if you want to edit your v=commits before you move thisng over:   git rebase -i


              before:                                   after:
                     feature                                         feature
                        |                                               | 
                O - O - O       commits                       / O - O - O    
        O - O                                  O - O - O - O /                 
                O - O                                                 The system assume you did the commits after
                    ^                                      ^          the master and adds things to the end.
                  master                                 master

          ---------------------------------------------------------------  
                  
              Pros                                            Cons 
       
       Cleaner project history                        Not safe to use on a public branch
       avoids extra merge commits                     potentially unsafe for your 
       perfectly linear project history                       collaberation workflow
                                                      poor traceability in project history

---------------------------------------------------------------------------------

bonus commands:

        git cherry-pick     takes a commit from somewhere else and let's you run it from whereever you are right now
        git rm
        git amend           
        git blame           if you have a bug you can select lines of code and find out who and when it was edited.
        git wtf
       
---------------------------------------------------------------------------------

if you install zshell, can take advantage of built-in git aliases:

            https://github.com/robbyrussell/oh-my-zsh/wiki/Cheatsheet
            
will let you do something like this:

    instead of:     git push origin crazyLongBranchName_#101
    can do:         ggp
    
---------------------------------------------------------------------------------

other references:

git SCM
git Cheatsheet (app)
github Git Cheatsheet
Think Like (a)( Git
Atlassian - Advanced Git Tutorials
Programming Bytes - Git Tips & Tricks
The Nuclear Squid - Git Tricks, Tips & Workflows

---------------------------------------------------------------------------------

                  
                  
                  
                  
*/
