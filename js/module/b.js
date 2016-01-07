define(['app'], function (app) {
    console.log('enhance a with methodB');
    var _routes;
    app.augment('routing', {
        setRoutes: function (routes) {
            _routes = routes;
        }
    })
    app.methodB = function () {
        console.log('method b is called: ' + _routes);
    };
    return app;
});