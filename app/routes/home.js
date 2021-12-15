
module.exports = (app)=>{
    const {home} = app.controllers;

    app.route('/user')
        .post(home.store);
    app.route('/users')
        .get(home.show)
}