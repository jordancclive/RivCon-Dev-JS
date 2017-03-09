/*
-------------------------------------------------------------------------

                        HTTP stuff

-------------------------------------------------------------------------

        '/users/:name/tasks?status=active'
          ==> req.query.status === 'active'

        '/users/:name/tasks?language=javascript'
          ==> req.query.language === 'javascript'

        '/users/:name/tasks?fullstack=academy'
          ==> req.query.fullstack === 'academy'
  
  
  -------------------------------------
  
  Look at the following:
  
  
          router.get('/users/:userName/tasks', function(req, res, next) {
          // do something
          });
        
          router.get('/users/:userName/tasks?status=complete', function(req, res, next) {
          // don't make hardcoded route for query!
          });
  
  Think about this:
  
          router.get('/users/:userName/tasks', function(req, res, next) {

            // when route is '/users/billy/tasks?status=complete'
            // req.params.userName === 'billy'
            // req.query.status === 'complete'

            // when route is '/users/billy/tasks'
            // req.query === {}
            // req.query.status === undefined
          });

          router.get('/users/:userName/tasks', function(req, res, next) {

            // when route is '/users/billy/tasks?status=complete'
            // req.params.userName === 'billy'
            // req.query.status === 'complete'

            // when route is '/users/billy/tasks'
            // req.query === {}
            // req.query.status === undefined
          });

          // if you want to check if query is given or not,
          // you can check req.query.status === undefined

          // however, if you try to check whether req.query is exist or not,
          // such as 
          // if (req.query) { // do something }

          // req.query value is always true, because even when there's no given query, it has empty object value, which has truthy value
          
          
          updated code:
 
 
                router.get('/users/:userName/tasks', function(req, res, next) {
                if (!req.query.status) {
                  // do something not using query
                } else {
                  // do something with query
                }
                });

                //or

                router.get('/users/:userName/tasks', function(req, res, next) {
                  Task.findAll({
                    where: req.query
                  })
                  .then(foundTask => {
                    // do something
                  })
                });
