define(['app'], function (app) {
    console.log('enhance a with methodC');

    app.methodC = function () {
        console.log('method c is called.');
    };
    return app;
});