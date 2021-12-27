module.exports = app =>{
    const {authentication} = app.controllers;
    
    app.route('/login')
        .post(authentication.index);
}