Ext.define('Default.view.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'user',
    title: 'Users',
    id: 'user',
    /* store: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ], */
    store: {
        type: 'userApi'
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            filter: {
                type: 'string'
            }
        },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },
    ],
    plugins: 'gridfilters',
    // height: 300,
    // width: 300,
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel'
    },
    buttons: [
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('user').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Deselect All',
            handler: function () {
                Ext.getCmp('user').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Select Data',
            handler: function () {
                var data = Ext.getCmp('user').getSelectionModel().getSelection();
                console.dir(data);
            }
        },
        {
            text: 'Show Popup',
            handler: function() {
                var pop = Ext.create('Default.view.Popup');
                pop.show();
            }
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    }
});