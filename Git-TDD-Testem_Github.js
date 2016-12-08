/*
-------------------------------------------------------------------------

                        Testem - running specs
                        
                        
                     Uploading git changes to github

-------------------------------------------------------------------------

To run the specs for a directory, you need to go into that directory and run the command testem.

                    $ testem
                    TEST'EM 'SCRIPTS!
                    Open the URL below in a browser to connect.
                    http://localhost:7357/



Even though we will not be grading your TestFirst assignments, we encourage you to commit your work and push your commits up to your fork of TestFirst-Checkpoint-Prep-Part-1.

                    $git add .
                    $git commit -m 'your commit message'
                    $git push origin master



Not only is this good practice for you, but you will need to push your work up to GitHub in this manner when you take your Checkpoints so that they can be graded. Get used to using Git now before you start your Checkpoints! If you are lost, please consult the 'Exploring Git' section of this workshop, or post your questions on Discuss or the Help Desk.

-------------------------------------------------------------------------

                       Installing Testem - Jasmine


-------------------------------------------------------------------------

Permissions:

            You should back-up your computer before moving forward.

            Option 1: Change the permission to npm's default directory

                1.  Find the path to npm's directory:

                        npm config get prefix
                        For many systems, this will be /usr/local.

                  WARNING: If the displayed path is just /usr, switch to Option 2 or you will mess up your permissions.

                2.  Change the owner of npm's directories to the name of the current user (your username!):

                        sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
                
                        This changes the permissions of the sub-folders used by npm and some other tools 
                        (lib/node_modules, bin, and share).

            
            Option 2: Change npm's default directory to another directory

                There are times when you do not want to change ownership of the default directory that npm 
                uses (i.e. /usr) as this could cause some problems, 
                for example if you are sharing the system with other users.

                Instead, you can configure npm to use a different directory altogether. 
                In our case, this will be a hidden directory in our home folder.

                1.  Make a directory for global installations:

                        mkdir ~/.npm-global
                
                2.  Configure npm to use the new directory path:

                        npm config set prefix '~/.npm-global'              
                
                3.  Open or create a ~/.profile file and add this line:

                        export PATH=~/.npm-global/bin:$PATH
                
                4.  Back on the command line, update your system variables:

                        source ~/.profile
                
                
                Test: Download a package globally without using sudo.

                        npm install -g jshint
                
                Instead of steps 2-4 you can also use the corresponding ENV variable (e.g. if you don't want to modify ~/.profile):

                        NPM_CONFIG_PREFIX=~/.npm-global
            
            
            Option 3: Use a package manager that takes care of this for you.

                If you're doing a fresh install of node on Mac OS you can avoid this problem altogether 
                by using the Homebrew package manager. Homebrew sets things up out of the box with the correct permissions.

                        brew install node

-------------------------------------------------------------------------

The install:

                      $ git clone https://github.com/{{your user name}}/TestFirst-Part-1.git
                      $ cd TestFirst-Part-1
                      $ npm install -g testem


*/
