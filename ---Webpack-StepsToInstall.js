/*
----------------------------------------------------------------------------------

                                      Webpack
                                  Steps to Install

----------------------------------------------------------------------------------

01-  create your high level project directory for
02-  type: npm init -y              <--setting up a default environment
                                       creates a new 'package.jspn' file
03-  git init                       <--setup git for this project
04-  npm install webpack --save
05-  touch webpack.config.js        <--create config.js file for webpack in primary project dir
06-  config contents:

        module.exports = {
            entry: './src/index',           //<--src = directory for your .js project files
            output: {                       //   index will be your top/first/entry .js in the bundle
                path: './dist',
                filename: 'bundle.js'       //<--always output to dist/bundle.js 
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
07-  change package json: add needed scripts:

         "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
			      "webpack":  "./node_modules/webpack/bin/webpack.js -w",
			      "start:dev":  "npm run webpack & http-server -c-1"	
          },
          
          Note: now you can use npm run webpack in the terminal console.
          
08-   create index.js (any name.js)

          Note: other .js files will be identified here with an import cmd
                     ex: import Foo from './Foo';
                These other files will have a corresponding export
                     ex: export default Foo;  <--exporting the class Foo
                      
09. npm install babel-loader --save
10. npm install babel-core --save
11. npm install babel-preset-es2015 --save

***The directory is ready for development***
*/
