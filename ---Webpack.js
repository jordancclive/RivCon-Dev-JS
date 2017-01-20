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
              
        --------------------------------------------------              
 
              type:     Mac-Pro-370:WebpackDir designadmin$ ./node_modules/webpack/bin/webpack.js   <---runs webpack

              result:   a bunch of stuff with the end saying:  Output filename not configured.
                        ...so I ran the webpack executable and got an error message.


              Discussion:
                        I need to create a config.js file for webpack in order for it to run.
                        let's do that & open our code editor:
              
              Type: touch webpack.config.js
                    code .
                    
              Discussion:
                        I can now see my empty 'webpack.config.js' file.  
                        At a basic level I need to specify 'module.exports = {};
                        and I need to specify an entry point and an output within the object.
                        
                        my entry is going to be:  entry: './src/index',     <---which doesn't exist yet
                        my output --->  output: {
                                            path: './dist',
                                            filename: 'bundle.js'
                                        }
                                        
                        The final statement:
                        
                                  module.exports = {
                                      entry: './src/index',
                                      output: {
                                            path: './dist',
                                            filename: 'bundle.js'
                                      }
                                  };
    
    
                        So, if I save this and run things again, it runs, but I get a different error:
                        
                        result:
                        
                              Mac-Pro-370:WebpackDir designadmin$ ./node_modules/webpack/bin/webpack.js
                              Hash: 9806551c60c2f4802965
                              Version: webpack 1.14.0
                              Time: 30ms

                              ERROR in Entry module not found: Error: Cannot resolve 'file' or 'directory' 
                              ./src/index in /Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir
                              design-admins-Mac-Pro-370:WebpackDir designadmin$
                                                
                    
              Discussion:
                        It, of course, finds the config file, but cannot find the 'index' file
                        nor the 'src' directory.  
                        
                        So let's make them now in the editor:
                        
                            - mkdir src (within our WebpackDir)
                            - touch index.js (in our src directory)
                            - inside index.js, let's type:  console.log('hello');
                            
                        Now, let's run ./node_modules/webpack/bin/webpack.js again in the console.
                        
                        result:                        
                        
                              Hash: 2f0583dc637cc12cae9a
                              Version: webpack 1.14.0
                              Time: 56ms
                               Asset     Size  Chunks             Chunk Names
                              bundle  1.41 kB       0  [emitted]  main
                                 [0] ./src/index.js 21 bytes {0} [built]

                        *** Everything runs properly. ***
                        
              Discussion:
                        Now that the command ran, let's take another look at our WebpackDir directory:
                        
                        We will see:
                        
                              The command created our 'dist' folder'
                              the file 'bundle.js' now also exists.
                              
                              If you look at bundle.js  , you will see a bunch of stuff,
                              but at the bottom you will see our console.log statement:
*/                              
                                        /******/ ([
                                        /* 0 */
                                        /***/ function(module, exports) {

                                          console.log('hello');

                                        /***/ }
                                        /******/ ]);                             
                              
/*                              
        --------------------------------------------------
          
In summary:    
            - we created a directory
            - initialized git
            - initialized npm
            - used npm to install webpack
            - created a config.js file for webpack
            - gave the config an entry point and an output file & location.
            - created the entry file: index.js
            - put a console.log stmt in the entry file
            - ran webpack
            - webpack created the output directory and file.
            - we looked and saw that the console.log was in theat output file.
            
  
                                                                 youtube timecode: 6:55 / 37.45  
----------------------------------------------------------------------------------

                                 What does Webpack
                               do & how does it bring 
                              in other files to do stuff
                              
----------------------------------------------------------------------------------            
          
    Webpack is going to take our files and it going to pack them for us.
    
    It is going to make our life easier because some of the things we can do in node
    we can't do when writing code for the browser.
    
----------------------------------------------------------------------------------  

              Discussion:
                        Let's go back to the index where we have only a console.log('hello');
                        
                        Let's replace that with:  var Foo = require('./Foo');  <---This is ES5
                        
                                                //const Foo = require('./Foo');  <---This is ES6 (will do this later)
                        
                        ...There are 2 ways to bring files in.  (require is not ES6)
                        ...import is the ES6 way
                        
                        Now let's run webpack again with a watch flag: ./node_modules/webpack/bin/webpack.js -w
                        
                            -w watches my files  also:  --watch
                            
                            -h you can see all the things that you can do with webpack
                            
              result:                        

                    Mac-Pro-370:WebpackDir designadmin$ ./node_modules/webpack/bin/webpack.js -h    
                    
                    got:
                              webpack 1.14.0
                              Usage: https://webpack.github.io/docs/cli.html

                              Options:
            ----->              --help, -h, -?
                                --config
                                --context
                                --entry
                                --module-bind
                                --module-bind-post
                                --module-bind-pre
                                --output-path
                                --output-file
                                --output-chunk-file
                                --output-named-chunk-file
                                --output-source-map-file
                                --output-public-path
                                --output-jsonp-function
                                --output-pathinfo
                                --output-library
                                --output-library-target
                                --records-input-path
                                --records-output-path
                                --records-path
                                --define
                                --target
                                --cache                                [default: true]
            ----->              --watch, -w
                                --watch which closes when stdin ends
                                --watch-aggregate-timeout
                                --watch-poll
                                --hot
                                --debug
                                --devtool
                                --progress
                                --resolve-alias
                                --resolve-loader-alias
                                --optimize-max-chunks
                                --optimize-min-chunk-size
                                --optimize-minimize
                                --optimize-occurence-order
                                --optimize-dedupe
                                --prefetch
                                --provide
                                --labeled-modules
                                --plugin
                                --bail
                                --profile
                                -d                                    shortcut for --debug --devtool sourcemap --output-pathinfo
                                -p                                    shortcut for --optimize-minimize
                                --json, -j
                                --colors, -c
                                --sort-modules-by
                                --sort-chunks-by
                                --sort-assets-by
                                --hide-modules
                                --display-exclude
                                --display-modules
                                --display-chunks
                                --display-error-details
                                --display-origins
                                --display-cached
                                --display-cached-assets
                                --display-reasons, --verbose, -v                    

        --------------------------------------------------
        
              result:                        

                    Mac-Pro-370:WebpackDir designadmin$ ./node_modules/webpack/bin/webpack.js -w    
                    
                    got: 
                              Hash: dd1eb2d2593d3f2b02cb
                              Version: webpack 1.14.0
                              Time: 92ms
                                  Asset     Size  Chunks             Chunk Names
                              bundle.js  1.57 kB       0  [emitted]  main
                                 [0] ./src/index.js 29 bytes {0} [built] [1 error]

                              ERROR in ./src/index.js
                              Module not found: Error: Cannot resolve 'file' or 'directory' 
                              ./Foo in /Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/src
                               @ ./src/index.js 1:12-28
                        
              Discussion:
              
                        As a reminder:
                                Let's go back to the index where we have only a console.log('hello');
                                Let's replace that with:  const Foo = require('./Foo');              
                        
                        We got an error message because we haven't created the Foo file yet.  Let's do that:
                        
                        Things to remember:
                        
                                - Our config file has an input of index which is run in the src directory
                                
                                - index is going to run the require statement and since we said we wanted the system
                                  to expect that file in the current directory ---> const Foo = require('./Foo'); 
                                  The system will look for Foo in the 'src' directory.
                                  ...and the system is looking for a file called:  Foo.js
                                  
                                - We need to put Foo in the src directory.  
                                
                                - Notice when you look at the console that after you build an empty Foo
                                  you immediately got a result that the build happened succesfully.  That is
                                  because you ran with the -w (watch) command, so that last command is still running and active.

                got: 
                          Hash: 77626611e9e480654221
                          Version: webpack 1.14.0
                          Time: 14ms
                              Asset    Size  Chunks             Chunk Names
                          bundle.js  1.5 kB       0  [emitted]  main
                             [1] ./src/Foo.js 0 bytes {0} [built]
                              + 1 hidden module                                

         --------------------------------------------------
         
              Discussion:
              
                        Let's put something in Foo:
                        
                        First let's create a constructor for Foo:
                        
                                  function Foo(name) {
                                      this.name = name;
                                  }
                        
                        then:   module.exports = Foo;      <----also not ES6
                        
                        ...and this runs:

                got: 
                          Hash: 2d26613bf3deca4b04af
                          Version: webpack 1.14.0
                          Time: 9ms
                              Asset    Size  Chunks             Chunk Names
                          bundle.js  1.7 kB       0  [emitted]  main
                             [0] ./src/index.js 155 bytes {0} [built]
                              + 1 hidden modules                             
         
              Discussion:
              
                        Let's look at the bundle file now:
                        
                        You see that webpack is bundling it all up into 
                        one .js file called bundlw.js in the 'dist' directory as we configured. 
                        
                              ....excerpt from bundle.js:
*/                              
                              /************************************************************************/
                              /******/ ([
                              /* 0 */
                              /***/ function(module, exports, __webpack_require__) {

                                var Foo = __webpack_require__(1);         //<---This is ES5

                                //const Foo = require('./Foo');       //<---This is ES6 (will do this later)

                              /***/ },
                              /* 1 */
                              /***/ function(module, exports) {

                                function Foo(name) {
                                    this.name = name;
                                }

                                module.exports = Foo; 

                              /***/ }
                              /******/ ]);                        
/*                                      
         --------------------------------------------------
           
              Discussion:
              
                        Let's put something more in index:
                        
                              var foo = new Foo('bar');
                              console.log(foo);
                              
                        Note:  There is no easy way to see this working.
                               So let's also create a web page to show things working.
                               
                               step 1: create an index.html file in the project's root directory
                                       and put the following inside:
                                       
                                       <html>
                                           <head>
                                              <script src = '/dist/bundle.js'></script>
                                           </head>
                                           <body>
                                           </body>
                                       </html>
                                       
                                step 2: goto terminal type:
                                
                                        open . (will open finder)
                                        right click 'open with'
                                        pick chrome
                                        
                        
                got:      ***(in the terminal)***
    
                          Hash: c0ba90f6594a5072abf3
                          Version: webpack 1.14.0
                          Time: 77ms
                              Asset     Size  Chunks             Chunk Names
                          bundle.js  1.74 kB       0  [emitted]  main
                             [0] ./src/index.js 197 bytes {0} [built]
                             [1] ./src/Foo.js 68 bytes {0} [built]                                      
                                      
                          ***(The web page is blank)***
                          
                          ***(in the JS console witin chrome)***
                          
                          Foo {name: "bar"}
                          Navigated to file:///Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/index.html                                      
                                      
         --------------------------------------------------                                      
                                      
              Discussion:
              
                        Let's now change the index to the following:
                        
                                  var Foo = require('./Foo');         //<---This is ES5                      
                                  //const Foo = require('./Foo');       //<---This is ES6 (will do this later)

                                  var foo = new Foo({ name: 'bar'});
                                  console.log(foo);  
                                  
                        We are passing in an object to an instance of Foo.
                        
                        As a result we need to change Foo.js as follows:
                        
                                  function Foo(config) {
                                      this.name = config.name;
                                  }
                                  Foo.prototype.sayHi = function() {
                                      console.log('Hello.  My name is ' + this.name);
                                  }

                                  module.exports = Foo;  
                                  
                        The teacher called this a configuration object for some reason.
                        
                        Note:  It runs as the terminal console indicates since webpack is still watching:
                        
                                  Hash: 97bd552cfa27c0751569
                                  Version: webpack 1.14.0
                                  Time: 15ms
                                      Asset     Size  Chunks             Chunk Names
                                  bundle.js  1.85 kB       0  [emitted]  main
                                     [0] ./src/index.js 206 bytes {0} [built]
                                     [1] ./src/Foo.js 166 bytes {0} [built]                        
                        
                        Let's look at chrome and index.html's JS console:
                        
                got:  (got what we had before)
                
                          Foo {name: "bar"}
                          Navigated to file:///Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/index.html                      
                        
              Discussion:
                        Let's use the method in the JS console and add it to index.html:
                        
                                  var Foo = require('./Foo');         //<---This is ES5                      
                                  //const Foo = require('./Foo');       //<---This is ES6 (will do this later)

                                  var foo = new Foo({ name: 'bar'});
                                  console.log(foo);
                                  foo.sayHi();                        
                        
                got:  
                            Foo {name: "bar"}
                            bundle.js:62 Hello.  My name is bar
                            Navigated to file:///Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/index.html                   
                        
              Discussion:
                        Let's break the method into 2 steps:
                        
                                  function Foo(config) {
                                      this.name = config.name;
                                  }
                                  Foo.prototype.sayHi = function() {
                                      console.log(this.getMessage());
                                  };
                                  Foo.prototype.getMessage = function () {
                                      return 'Hello.  My name is ' + this.name + '!';
                                  };

                                  module.exports = Foo;      
     
                got:  (it works)
                                   
                          bundle.js:51 Foo {name: "bar"}
                          bundle.js:62 Hello.  My name is bar!
                          Navigated to file:///Users/designadmin/Documents/gitRepositories/FlexClass/WebpackDir/index.html                   
                   
         --------------------------------------------------                             
                        
 The value of webpack:
 
          - brings in other files.  ...as many as you want.
          - webpack is going to pack them up for us.
          
                        
                        
                        

*/
