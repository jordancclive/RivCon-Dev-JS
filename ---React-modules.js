/*
---------------------------------------------------------

                React modules      

---------------------------------------------------------

To import other modules into our file, we can use require, 
and export using module.exports!
*/

            const React = require('react');

            class Main extends React.Component {
              /** Hello world! **/
            }
            module.exports = Main;

/*   ----------------------------------------------

      .....or....keywords that have been 
      specified by the ES6 specification:

*/   ----------------------------------------------

            // use `import...from` instead of `require`
            import React from 'react';

            // say `export` or `export default` instead of `module.exports`
            export default class Main extends React.Component {
              /** Hello world! **/
            }


/*   ----------------------------------------------

    The ES6 import syntax also supports something very much like object destructuring 
    to extract specific values off from the module we're importing. 
    
    For example, instead of saying React.Component, 
    we could extract Component off of the React module like so:

*/   ----------------------------------------------

            // use {} to extract the value, and separate any values with commas
            import React, {Component} from 'react';

            // now we can just say Component
            export default class Main extends Component {
              /** Hello world! **/
            }


/*   ----------------------------------------------

    With export, we also have a choice - each module can have a single default export, 
    as well as any number of regular exports. 
    
    The only difference is that when we import the module, 
    any exports that aren't the default need to be within curly braces, 
    
    like so:

*/   ----------------------------------------------

            /** ourExports.js */

            // we export foo and bar
            export const foo = 1;
            export const bar = 'hello world';

            // we export default baz
            const baz = () => console.log('goodbye world!');
            export default baz;
            

            //------------------
            /** ourImports.js */

            // we can import baz by default without using curly braces
            import baz, { foo, bar } from './ourExports.js';
            // foo and bar, however, need to be within curly braces
            

