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


