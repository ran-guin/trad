/**
* Clinic.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName     : 'clinic',

  attributes: {
    // The clinic's full name
    // e.g. 
    name: {
      type: 'string',
      required: true,
      unique: true,
    },

    // The clinic's email address
    // e.g. nikola@tesla.com
    email: {
      type: 'email',
      required: true,
    },

    // The street address of the clinic
    // 
    address: {
      type: 'string',
      required: true
    },

    // postal code for clinic
    postalCode: {
      type: 'date',
      required: true,
    },

    // fax number if applicable (for requisitions if required)
    faxNumber: {
      type: 'string'
    },

    // phone number for front desk (may change to many to one later)
    phoneNumber: {
      type: 'string',
      required: true
    },

    // foreign key to region
    region_id: {
      type: 'integer'
    },

    // enable clinic status to be verified 
    verificationStatus: {
    	type: 'string',
    	enum: ['Pending','Verified'],
    	defaultsTo: 'Pending'
    },

    staff: {
        collection: 'staff',
        via: 'clinics'
    }
  }

};

