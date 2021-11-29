module.exports.controller = app => {

    // get users page
    app.get('/users', (req, res) => {
        res.render('users', {title: 'Users', description: 'In this page you will find everything about the users of the site.'});
    });
};