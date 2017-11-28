module.exports = [
    {
      id: '12345',
      name: 'Cory',
      Bank_name: 'Bank of Colorado',
      description:'Personal Account',
      transition: [ {
            id: '00034',
            title: 'gas',
            amount: 45,
            pending: false,
        }]//end of transaction array
    }, {
      id: '23456',
      name: 'Alex',
      bank_name: 'Bank of The West',
      description:'Personal Account',
      transition: [ {
            id: '00013',
            title: 'mall',
            amount: 234,
            pending: true,
        }]//end of transaction array
    }, {
      id: '34567',
      name: 'Kyla',
      bank_name: 'Bank of America',
      description:'Personal Account',
      transition: [ {
            id: '00012',
            title: 'store',
            amount: 34,
            pending: false,
        }]//end of transaction array
    }
  ]
  
  // ID: (You Choose) A unique id that represents the transaction. Created automatically.
  // Title: (String) A title for the transaction. Cannot be more than 8 characters. Required.
  // Amount: (Number) A positive or negative number depending on the type of transaction. Required.
  // Pending: (Boolean) A true/false value for whether or not the transaction is pending. Required. Defaults to true.