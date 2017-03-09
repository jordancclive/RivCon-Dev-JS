/*
-----------------------------------------------------------------------------------

                                Express, HTTP & Testing

-----------------------------------------------------------------------------------

Premise/Issue:

Testing an express application.  The test looks like this:

        xit('POST respects pre-existing completion status', function() {
          return supertest
            .post('/users/sarah/tasks')
            .send({ content: 'a new task for sarah', complete: true}) // the HTTP request body    <----where does this go?
            .expect(201) // you'll have to customize the status yourself
            .expect('Content-Type', /json/)
            .expect(function(res) {
              expect(res.body).to.eql({
                content: 'a new task for sarah',
                complete: true
              });
              expect(todos.list('sarah')).to.have.length(1);
              expect(todos.list('sarah')[0]).to.eql({
                content: 'a new task for sarah',
                complete: true
              });
            });
        });

------------------------------------------------

Discussion:

    apenchev:
    
            send() goes to your express server.

                Usually after post we redirect, in this case we send back to supertest 
                the created task for the user(i have res.send(user info) in my post route) 
                so that is what gets in the res.body in the test script

    Gabriel Lebec

            @apenchev basically has it. 
            
            We're talking about two different contexts here. 
            
            Supertest (based on Superagent) is acting as an HTTP client, 
            `send`ing to your server and checking the `body` of the server's `res`ponse. 
            
            From the other side of the HTTP link, your server (Express app) is receiving a `req`uest from Supertest, 
            and `send`ing a `res`ponse. So the thing you `res.send` in Express ends up being the `res.body` in Supertest.

            --------------------------------
            
  ---->     *Do not confuse Express's res object with Supertest's res object*, or for that matter, 
            Express's `send` method with Supertest's `send` method.  These are two separate programs!
            
            
            Express `res` is an object with methods allowing you to control the response sent from the server to the client.

            Supertest `res` is an object with data on it representing the HTTP response that was sent from the server.

            --------------------------------
            
            Express `res.send` is a method which sends data via HTTP to the client.

            Supertest `.send` is a method which sends data via HTTP to the server.
            
            --------------------------------

            Supertest's `send` data ends up in Express as `req.body` (with body-parsing).

            Express's `send` data ends up in Supertest as `res.body`.
            
            --------------------------------


My response to this discussion:
 
            So I should be looking for the res.send to wind up in my res.body…yes?
 
            do i reference it simply as:  let myNewVariable = res.body?

                    or in the snippet above…res.body.content?
                    & res.body.complete?

            answer:
            
            As I show below, there is no such thing as `res.body` in express. 
            What you `res.send` from Express becomes `res.body` in Supertest.
            
            What you send from supertest comes in as req.body.elementId
                        
-----------------------------------------------------------------------------------

error status & codes:

            router.post('/:name/tasks', (req, res, next) => { 
                let name = req.params.name;
                console.log(req.body)
                let _task = data.add(name, { content: 'a new task for sarah', complete: true});
                res.status(201);
                res.send(_task);
            });
            
            
            .catch( (err) => {
                 res.status(400)
                 next(err)
               })
            
 -----------------------------------------------------------------------------------           
