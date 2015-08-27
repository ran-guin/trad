/**
* Treatment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName     : 'treatment',

  attributes: {

  	visitId: {
  		model: 'visit',
  		columnName: 'visit_id'
  	},

  	vaccineId: {
  		model: 'vaccine',
  		columnName: 'vaccine_id'
  	},
 
 	route: {
 		type: 'string',
 		enum: ['IM - Intramuscular', 'SC - Subcutaneous','ID - Intradermal', 'IN - Intranasal', 'PO - Oral']
 	},

 	site: {
 		type: 'string',
 		enum: ['LA - Left Arm', 'RA - Right Arm', 'LT - Left Thigh', 'RT - Right Thigh']
 	},

 	notes: {
 		type: 'string',
 	},

  	expiry: {
  		type: 'date'
  	},

  	lot: {
  		type: 'string'
  	},

  	reactionLevel: {
  		type: 'string',
  		enum: ['None','Mild','Strong'],
  		required: true
  	},

  	reactionNotes: {
  		type: 'string'
  	},

  }
};

