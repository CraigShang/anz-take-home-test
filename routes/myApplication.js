module.exports = function(app) {

    //GET - Return a TVShow with specified ID
    getAppInfo = function(req, res) {
        var myapplication;
        myapplication.set("version","1.0");
        myapplication.set("lastcommitsha","DSFDSFd");
        myapplication.set("description","pre-interview technical test");
        res.send(myapplication);
    };

    //Link routes and functions
    app.get('/appinfo', getAppInfo);

}
