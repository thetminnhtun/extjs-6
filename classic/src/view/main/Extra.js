Ext.define('Default.view.main.Extra', {
    extend: 'Ext.container.Container',
    id: 'extra',
    controller: 'extra',
    items: [
        {
            title: 'Extra View',
            html: '<h1>Content</h1>'
        },
        {
            xtype: 'button',
            text: 'Click me',
            itemId: 'clickMeBtn'
        }
    ]
});