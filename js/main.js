require.config({
    baseUrl: 'js/',
    paths: {
        app: 'app',
        b: 'module/b',
        c: 'module/c'
    },
    shim: {
        // nothing
    }
});

require(['app', 'b', 'c'], function (app, b, c) {
    app.init();
    app.methodB();
    app.methodC();
})