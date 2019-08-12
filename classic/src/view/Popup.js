Ext.define('Default.view.Popup', {
    extend: 'Ext.window.Window',
    height: 200,
    width: 400,
    layout: 'fit',
    modal: true,
    items: [
        {
            xtype: 'grid',
            // border: false,
            store: [],
            columns: [
                {header: 'Name'},
                {header: 'Email'},
                {text: 'Address'}
            ]
        }
    ]
});