/*
---------------------------------------------------------------------

                Cloning &/or Forking a Repository

---------------------------------------------------------------------

Start with clicking the "Fork" button in the upper right corner.

        - The system will ask you where you want to put it.  --->generally select your account.
        
The system will create a copy of the entire repository in your account.

Once you have a fork (a copy), you will want to clone it to your local computer.

        - select "clone" and copy the HTTPS link listed. 
        
On the Terminal/Console:
        
        Create a general container folder ---> "Foundations" to designate Fullstack repositories.

        Now clone within this Directory the "fork" by typing the following command:  git clone <HTTPS link>
        This does a couple of things:
        
                - First:    It creates a folder containing that project.
                
                - Second:   Within this folder, it has a git reposotory initiated.  (git init) & (.git directory) done.
                
                - Third:    It sets the (git remote) called (origin) to point to your remote fork on github.com
                
                            If you do a (git remote -v)
                            result:  https links pointing to your fork.

At this point you can make some changes to the repository using the text editor "sublime" as an example.

        Type the command:     subl .    <---If this worked, I would see the dirextory tree inside sublime.
        I am now running sublime outside of the console.
        
        You can change the files in the working directory........stage them and commit them.
        This will make your local repository up to date. 
        
        ...but if you run a (git status) at this second you will get a message:  
        
                On branch master
                Your branch is ahead of "origin/master" by X number of commits.
                (use "git push" to publish your local commits)
                nothing to commit, working directory clean.
                
At this point you need to "push" the updated repository to the git.com forked repository.

        Type the command:     git push origin master
        
        This will synchronize the 2 repositories.  Result:
        
                Counting objects: 3, done.
                Delta compression using up to 4 threads.
                Compressing oObjects: 100% (3/3), done.
                Writing Objects: 100% (3/3), 348 bytes | 0 bytes/s, done.
                Total 3 (delta 2), reused 0 (delta 0)
                To https://github.com/.......... .git
                    5325313..9e37c55  master -> master
             

                
                
                
                
                
                
                
                

        









*/
