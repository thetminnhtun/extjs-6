/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Default.Application',

    name: 'Default',

    requires: [
        // This will automatically load all classes in the Default namespace
        // so that application classes do not need to require each other.
        'Default.*'
    ],
    launch: function() {
        /* var viewport = Ext.getCmp('viewport');
        var target = viewport.down('#viewport-target');
        var view = Ext.create('Default.view.User');
        target.add(view); */
    },

    // The name of the initial view to create.
    mainView: 'Default.view.User',
    // autoCreateViewport: true,
});
