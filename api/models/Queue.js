/**
* Queue.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  tableName: 'queue',

  attributes: {
  	status: {
  		type: 'string',
  		enum: ['Active','Closed','Terminated'],
  		defaultsTo: 'Active'
  	},

  	created: {
  		type: 'datetime',
  		defaultsTo: new Date()
  	},

  	concluded: {
  		type: 'datetime'
  	}

  }
};

