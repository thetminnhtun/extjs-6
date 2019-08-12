Ext.define('Default.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    init: function() {
        this.control({
            '#clickMeBtn': {
                click: 'callOnClick'
            }
        })
    },
    callOnClick: function() {
        Ext.Msg.alert('Alert', 'Hello World!');
    }

});