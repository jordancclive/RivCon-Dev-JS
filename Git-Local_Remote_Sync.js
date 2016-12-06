/*
---------------------------------------------------------------------

            Github & Git in Harmony

---------------------------------------------------------------------

            Creating a new repository on github

---------------------------------------------------------------------

Assumptions:

            -  You have already created a git repository on your local drive and committed everything to it.
            -  You want to have this repository also reflected remotely on github.com 
            
            -------------------------------------
            
Add the repository on github:

            -  Go to github.
            -  click the repositories tab and then click "New"
            -  You will then name your repository.
            
                        There are a few options also on this page:
                        
                                    -  making the repository public or private
                                    -  initializing the repository with a README file.
                        You can leave it public for the moment. 
                        ....in this example we are going to import an existing repository
                        
            -  now hit:   "create repository"
            
            -------------------------------------
           
Your local and remote repository have been created now you need to connect them together.
           
            After hitting "create repository", you will be presented with the following page:
            
                        Quick setup — if you’ve done this kind of thing before
                        
                                    .......we are not going to do this......
                        
                        …or create a new repository on the command line

                                    echo "# VinTestRepo" >> README.md
                                    git init
                                    git add README.md
                                    git commit -m "first commit"
                                    git remote add origin https://github.com/rivermanvr/VinTestRepo.git
                                    git push -u origin master
                        
        ---->           …or push an existing repository from the command line                   <----

                                    git remote add origin https://github.com/rivermanvr/VinTestRepo.git
                                    git push -u origin master
                        
                        …or import code from another repository
                        
                                    ......more on this later......
            
            You are going to go the the repository directory on your local machine and run the
            two commands listed above in your console.
            
            The first line:         git remote add origin https://github.com/rivermanvr/VinTestRepo.git
            will connect your local repository with the remote one and name it "origin"

            -------------------------------------
            
            You can now run the command:        git remote -v
            
            The result:
                        origin	https://github.com/rivermanvr/VinTestRepo.git (fetch)
                        origin	https://github.com/rivermanvr/VinTestRepo.git (push)
                        
            This above command shows you which urls the remote is connected to.
            
            -------------------------------------
            
            Now you can run the second command:             git push -u origin master



























*/
