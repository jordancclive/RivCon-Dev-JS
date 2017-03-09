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
