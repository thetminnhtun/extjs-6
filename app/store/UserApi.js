Ext.define('Default.store.UserApi', {
    extend: 'Ext.data.Store',
    alias: 'store.userApi',
    // remoteFilter: true,
    pageSize: 2,
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/users',
    },
    autoLoad: true
});