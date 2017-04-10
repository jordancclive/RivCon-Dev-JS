/*
---------------------------------------------------------------------------

                        Sequelize notes

//---------------------------------------------------------------------------

Relationships:    many employees to 1 manager

can setManager for an employee

can addEmployee to a manager
*/
//---------------------------------------------------------------------------

// general sequelizestuff:

            const User = sequelize.define('user', {
                  username: Sequelize.STRING,
                  birthday: Sequelize.DATE,
                  article: Sequelize.INTEGER,
                  summary: {
                      type: Sequelize.STRING,
                      allowNull: false
                      validate: { notEmpty: true }
                      }
               },{
                  getterMethods: {
                      snippet: function() {
                          return `${this.summary.slice(0,23)}...`
                      }
                  },
                  hooks: {
                      beforeUpdate: function() {
                          article++
                      }
                  }
               }
            )

//---------------------------------------------------------------------------

// deleting a record:

    book.destroy({ where: id: req })

    //or

    book.findById()  //you will put a where inside the ()
      .then(book => book.destroy())

//---------------------------------------------------------------------------

//on-delete cascade:

            var Sequelize = require('sequelize')
                , sequelize = new Sequelize('advo_test', 'advo', 'preveza', {dialect: 'postgres'});

            var User = sequelize.define('User', {
                username: Sequelize.STRING,
                birthday: Sequelize.DATE
            }, {paranoid: true}); //Without paranoid the code works fine

            var Email = sequelize.define('Email', {
                email: Sequelize.STRING,
                primary: Sequelize.BOOLEAN
            }, {paranoid: true}); //Without paranoid the code works fine

            User.hasMany(Email, {onDelete: 'cascade'});
            Email.belongsTo(User, {onDelete: 'cascade'});

            sequelize.sync({force:true}).success(function () {
/*

---------------------------------------------------------------------------

updating the user:

            Project.find({ where: { title: 'aProject' } })
              .on('success', function (project) {
                // Check if record exists in db
                if (project) {
                  project.updateAttributes({
                    title: 'a very different title now'
                  })
                  .success(function () {})
                }
              })
              
              or
              
               Project.update(
                { title: 'a very different title now' },
                { where: { _id: 1 } }
              )
                .success(result =>
                  ...
                )
                .error(err =>
                  ...
                )   
                
                
             This is what we want:
             */
                    var Foo = db.define('foo', {
                      bar: Sequelize.STRING
                    });

                    app.put('/foos/:id', function(req, res, next){
                      console.log(req.body);
                      
                      Foo.findById(req.params.id)
                      
                        .then(function(foo){
                          if(!foo){
                            return res.sendStatus(404);
                          }
                          foo.bar = req.body.bar;
                          return foo.save();
                        })
                        .then(function(foo){
                          if(foo){
                            res.send(foo);
                          }
                        });
                    });
/*



















*/
