/*
------------------------------------------------------------------------------------

                                  Leveraging
                                   Webpack

------------------------------------------------------------------------------------

In the next step, we will use ES6 syntax and webpack is going to set it up so even if a
browser doesn't know ES6, webpack will turn what we do into compatible code and the routines will work.

------------------------------------------------------------------------------------

Let's put this in Foo (from the webpack.js write-up).
*/
        //This is ES5:
        // function somethingSilly() {
        //     console.log('hello');
        // }

        //This is the ES6 equivalent:
        /*
            - creating a variable as a constant.
            - The () means we are creating a function.
            - What is after the => is what we are going to do in the function
                you can use arguments in this code.
                and you can do this in multiple lines.
        */
        const somethingSilly = ()=> console.log('hello');

	      somethingSilly();

        //If I go into chrome it will work, but in safari, you will get a reference error.
/*
        Discussion:
        
                We need to have webpack help us resolve this issue and it is done with using loaders.
                
                Step 1:  we need to install babel:  npm install babel-loader --save
                         meaning install it and save it.  (comes in fast)
                         
                Step 2: we installed babel's loader, but we also need babel itself:
                        ---> npm install babel-core --save    <---
                        
                Step 3: now we have the loader and the core, we now need the babel presets to bundle 
                        our files into es2015.  --->  npm install babel-preset-es2015 --save
                        
                Step 4: We need to change our webpack.config.js file to include using this babel loader, core & preset:
                
                        Now the config looks like this:
                        
                                module.exports = {
                                    entry: './src/index',
                                    output: {
                                        path: './dist',
                                        filename: 'bundle.js'
                                    },
                                    module: {
                                        loaders: [
                                            {
                                                test: /\.js$/,      //<--operate on files that end in .js
                                                loader: 'babel',    //<--The loader is babel
                                                query: {            //<--we are going to query the es2015 preset
                                                    presets:    ['es2015']
                                                }
                                            }
                                        ]
                                    }
                                };

                Now we have all we need to do what we want to do!
                
                If you have webpack watching, you need to ctrl C and re-run it in order to get the new config file.
                
                It runs:
                
                        Hash: 044d0c3fe80aa634cd1e
                        Version: webpack 1.14.0
                        Time: 78ms
                            Asset     Size  Chunks             Chunk Names
                        bundle.js  2.32 kB       0  [emitted]  main
                           [0] ./src/index.js 219 bytes {0} [built]
                           [1] ./src/Foo.js 602 bytes {0} [built]
                
                
                
                Let's look at our bundle file:
*/                
                        /************************************************************************/
                        /******/ ([
                        /* 0 */
                        /***/ function(module, exports, __webpack_require__) {

                          'use strict';

                          var Foo = __webpack_require__(1); //<---This is ES5                      
                          //const Foo = require('./Foo');       //<---This is ES6 (will do this later)

                          var foo = new Foo({ name: 'bar' });
                          console.log(foo);
                          foo.sayHi();

                        /***/ },
                        /* 1 */
                        /***/ function(module, exports) {

                          'use strict';

                          function Foo(config) {
                              this.name = config.name;
                          }
                          Foo.prototype.sayHi = function () {
                              console.log(this.getMessage());
                          };
                          Foo.prototype.getMessage = function () {
                              return 'Hello.  My name is ' + this.name + '!';
                          };

                          //This is ES5:
                          // function somethingSilly() {
                          //     console.log('hello');
                          // }

                          //This is ES6:
                          /*
                              - creating a variable as a constant.
                              - The () means we are creating a function.
                              - What is after the => is what we are going to do in the function
                                  you can use arguments in this code.
                          */
                          var somethingSilly = function somethingSilly() {      //<--babel converted this back to 
                              return console.log('hello');                      //   es2015 code.
                          };

                          somethingSilly();

                          module.exports = Foo;

                        /***/ }
                        /******/ ]);            
/*
        --------------------------------------------------                
                
------------------------------------------------------------------------------------                
                
                
                
                
                
                        
                



















*/
