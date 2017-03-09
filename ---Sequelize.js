/*
---------------------------------------------------------------------------

                        Sequelize notes

---------------------------------------------------------------------------

on-delete cascade:

*/
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




















*/
