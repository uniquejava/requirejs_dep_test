define(['app','b'], function (app) {
    console.log('enhance a with methodC');
    app.routing.setRoutes('routes from c');

    app.methodC = function () {
        console.log('method c is called.');
    };
    return app;
});