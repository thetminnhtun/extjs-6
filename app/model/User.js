Ext.define('Default.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { email: 'email' },
        { phone: 'phone' }
    ]
});