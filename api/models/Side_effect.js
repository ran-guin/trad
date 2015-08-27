/**
* Side_effect.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	known_side_effect: {
  		type: 'string'
  	},

  	probability: {
  		type: 'decimal'
  	},

  	degree: {
  		type: 'string',
  		enum: ['Strong', 'Normal','Mild'],
  		defaultsTo: 'Normal'
  	},
  	
    vaccine_id: {
      model: 'vaccine',
    }
  }
};

