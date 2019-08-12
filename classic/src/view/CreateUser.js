Ext.define('Default.view.CreateUser', {
    extend: 'Ext.form.Panel',
    title: 'Create User',
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First Name',
            name: 'firstname',
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastname'
        },
        {
            fieldLabel: 'Email',
            name: 'email'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'DOB',
            name: 'dob'
        }, 
        {
            xtype: 'button',
            text: 'Submit',
            handler: function() {
                var formData = this.up('form').getForm().getValues();
                console.log('Form Data: ',formData);
            }
        }
    ],
});