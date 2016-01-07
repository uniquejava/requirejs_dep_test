define([], function () {
    console.log('define a');

    var app = {
        init: function () {
            console.log('app init.');
        },
        augment: function (obj, func) {
            this[obj] = func;
        }
    }
    window.app = app;

    return app;
});