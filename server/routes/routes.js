module.exports = function(app) {

    app.get('/index.html', function(req, res) {
        res.render('index');

    })

    app.get('/restful', function(req, res) {
        console.log(req.query);
        sleep(1000);
        var result =  {}  
        res.send(result);
    })

}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};