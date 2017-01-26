/*
---------------------------------------------------------------------------------------

                                      Express.js
                                       Step #2
                                       
                                      Templates
                                      
---------------------------------------------------------------------------------------

A templating engine is a program that renders final documents (e.g. HTML files) based on templates. 
A template is an outline or plan for a document, which can be combined with data to complete it.

            template file + locals object -> rendering function -> complete html

*/

        npm install nunjucks --save       //This will show up in package.json & must be required in the app.js file.

//-------------------------------------------------------
        
        //copied the following into index.html:

          <h1>{{ title }}</h1>                      // {{ ... }}  //tags are variables
          <p>This is a bare-bones template.</p>
          <ul>
          {% for person in people %}                // {% ... %}  //are logic tags
            <li>{{ person.name }}</li>
          {% endfor %}
          </ul>
        
        //copied into nunjucks.js file and ran it:
        
            const express = require ( 'express' );
            const chalk = require ( 'chalk' );
            const nunjucks = require ( 'nunjucks' );
            const app = express();
            app.set('view engine', 'html'); // have res.render work with html files
            app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
            nunjucks.configure('views'); // point nunjucks to the proper directory for templates

            var locals = {
                title: 'An Example',
                people: [
                    { name: 'Gandalf'},
                    { name: 'Frodo' },
                    { name: 'Hermione'}
                ]
            };
            nunjucks.configure('views', {noCache: true});
            nunjucks.render('index.html', locals, function (err, output) {
                console.log(output);
            });
           
          // got this in the console:
            <h1>An Example</h1>
            <p>This is a bare-bones template.</p>
            <ul>

              <li>Gandalf</li>

              <li>Frodo</li>

              <li>Hermione</li>

            </ul>

//-------------------------------------------------------

//        Add this to the top of our app.js file:

            const express = require ( 'express' );
            const chalk = require ( 'chalk' );
            const nunjucks = require ( 'nunjucks' );
            const app = express();

            app.set('view engine', 'html');               // have res.render work with html files
            app.engine('html', nunjucks.render);          // when giving html files to res.render, tell it to use nunjucks
            nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

            const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

            app.use('/special/', function (req, res, next) {        // <---Question for class, redirected, 
                    if (req.url.length >1){                         //     but what if a file name was here
                        res.redirect('/special');
                    }
                    next();
                })

            app.use(function (req, res, next) {
                console.log('method: ', req.method, ' url: ', req.url);
                res.on('close', function(){
                    console.log('close response code: ',res.statusCode);
                })
                res.on('finish', function(){
                    console.log('finish response code: ', res.statusCode);
                })
                next();
            })

            app.get('/', function (req, res, next) {
                res.render( 'index', {title: 'Hall of Fame', people: people} );
            })

            app.get('/news', function (req, res, next) {
              res.send('You visited the /news directory')
            })

            app.get('/special/', function (req, res, next) {
              res.send('You visited the /special directory')
            })

            app.listen(3000, function(){
                console.log('listening to port 3000');
            });

















