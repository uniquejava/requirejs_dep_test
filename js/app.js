define([], function () {
    console.log('define a');

    var app = {
        init: function () {
            console.log('app init.');
        }
    }
    window.app = app;

    return app;
});