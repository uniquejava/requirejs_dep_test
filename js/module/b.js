define(['app'], function (app) {
    console.log('enhance a with methodB');

    app.methodB = function () {
        console.log('method b is called.');
    };
    return app;
});