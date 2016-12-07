/*
----------------------------------------------------------------------

                 fixing-npm-permissions

----------------------------------------------------------------------

Option 1: Change the permission to npm's default directory

Find the path to npm's directory:

                        npm config get prefix
 
                        For many systems, this will be /usr/local.

WARNING: If the displayed path is just /usr, switch to Option 2 or you will mess up your permissions.

Change the owner of npm's directories to the name of the current user (your username!):

                        sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
                        
This changes the permissions of the sub-folders used by npm and some other tools (lib/node_modules, bin, and share).









*/
