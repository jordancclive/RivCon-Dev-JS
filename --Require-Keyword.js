/*
-------------------------------------------------------------------------------

                    Require keyword

-------------------------------------------------------------------------------

Three ways to require modules:

        If the module is built into Node, we can simply use the name: var fs = require('fs')
        If the module was installed via npm, we can use the name: var nunjucks = require('nunjucks')
        If the module is one we've written, we need the path: var greeter = require('./greeter')

Relative Paths and Require

        The path string is relative to the file making the require call. If we need a file in:

        a directory above, the path starts with '../'
        the same directory, the path starts with './'
        a "utils" sub-directory, the path starts with './utils/'

The Default Module is index.js

        If you require a folder without specifying a file, 
        Node will assume you want the index.js (if there is one) in that folder. 
        So these four expressions are equivalent:

        require('./routes')
        require('./routes/')
        require('./routes/index')
        require('./routes/index.js').

---------------------------------------


















*/
