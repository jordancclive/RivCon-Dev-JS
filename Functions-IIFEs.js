/* functions-IIFEs.js

  Either of the following two patterns can be used to immediately invoke
  a function expression, utilizing the function's execution context to
  create "privacy."   */

      (function(){ /* code */ }());     // this one works
      (function(){ /* code */ })();     // and this one works just as well
