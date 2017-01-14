/*
----------------------------------------------------------------------------------

                                      Webpack

----------------------------------------------------------------------------------

let's start with a fesh directory:    mkdir WebpackDir

I also typed:   git init

result:         Mac-Pro-370:WebpackDir designadmin$ ls -a
                .	..	.git

        --------------------------------------------------

        need to install some modules to make Webpack run:

              Webpack is a program that is running on our machine in .node

              will take a JS file or several JS file and pack them together.

              We will use ES6 and we will make sure it will convert it to ES5.

              we are going to install npn modules and put some scripts in our package.json file

        --------------------------------------------------

              Step 1:   type: npm init -y
                                        ^__this flag bypasses a bunch of questions and sets up a default install.

              result:     A new 'package.jspn' file was created as follows:

                              Mac-Pro-370:WebpackDir designadmin$ npm init -y

                              Wrote to /Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/package.json:

                              {
                                "name": "WebpackDir",
                                "version": "1.0.0",
                                "description": "",
                                "main": "index.js",
                                "scripts": {
                                  "test": "echo \"Error: no test specified\" && exit 1"
                                },
                                "keywords": [],
                                "author": "",
                                "license": "ISC"
                              } 

                              If I now type:    Mac-Pro-370:WebpackDir designadmin$ ls
                              I get:            package.json

        --------------------------------------------------

              Step 2:   
              
              type:     git status
              
              result:

                        Mac-Pro-370:WebpackDir designadmin$ git status
                        On branch master

                        Initial commit

                        Untracked files:
                          (use "git add <file>..." to include in what will be committed)

                          package.json

                        nothing added to commit but untracked files present (use "git add" to track)

                type:   git add .
                        git status
                      
                result:

                        On branch master

                        Initial commit

                        Changes to be committed:
                          (use "git rm --cached <file>..." to unstage)

                          new file:   package.json

                type:   git commit -m 'VR first commit'

                result:

                        [master (root-commit) c724a7b] VR first commit
                         1 file changed, 12 insertions(+)
                         create mode 100644 package.json
                        
                        Mac-Pro-370:WebpackDir designadmin$ git status
                        On branch master
                        nothing to commit, working tree clean

        --------------------------------------------------

Now we are ready for Webpack

              Step 3:   
              
              type:     npm install webpack --save

              result:   All sorts of stuff happens and finally webpack is installed
              
              Let's check by typing:  Mac-Pro-370:WebpackDir designadmin$ ls -alt
                                      total 8
                                      drwxr-xr-x    5 designadmin  staff   170 Jan 14 15:43 .
                                      drwxr-xr-x  134 designadmin  staff  4556 Jan 14 15:43 node_modules
                                      -rw-r--r--    1 designadmin  staff   274 Jan 14 15:43 package.json
                                      drwxr-xr-x   13 designadmin  staff   442 Jan 14 15:37 .git
                                      drwxr-xr-x    4 designadmin  staff   136 Jan 14 15:13 ..
                                      
              There is a 'node_modules' folder' in our directory (which is where Webpack is saved to by default).
              Also got my package.json file and our .git file.
 
 
              type:     Mac-Pro-370:WebpackDir designadmin$ ./node_modules/webpack/bin/webpack.js

              result:   a bunch of stuff with the end saying:  Output filename not configured.
                        ...so I ran the webpack executable and got an error message.
          
              Discussion:
                        I need to create a config.js file for webpack in order for it to run.
                        let's do that & open our code editor:
              
              Type: touch webpack.config.js
                    code .
                    
              
              
                                      
                                   
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      

*/
