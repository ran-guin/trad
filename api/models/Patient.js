/**
* Patient.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName     : 'patient',

  attributes: {
    // The user's full name
    // e.g. Nikola Tesla
    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    birthdate: {
    	type: 'date',
    	required: true
    },

    gender: {
    	type: 'string',
    	enum: ['M','F']
    },

    notes: {
    	type: 'string'
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    identifier: {
    	type: 'string',
    	required: true,
    },

    identifierType: {
    	type: 'string',
    	enum: ['BC Care Card #', 'OHIP #']
    }
  }
};

