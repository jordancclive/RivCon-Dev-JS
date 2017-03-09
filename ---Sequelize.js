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





















*/
