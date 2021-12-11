
module.exports = (app)=>{
    const {home} = app.controllers;

    app.route('/user')
        .post(home.index);
    app.route('/users')
        .get(home.show)
}