/**
* Visit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName     : 'visit',
  
  attributes: {

  	patientId: {
  		model: 'patient',
  		columnName: 'patient_id'
  	},

  	clinicId: {
  		model: 'clinic',
  		columnName: 'clinic_id'
  	},

  	date: {
  		type: 'date'
  	},

  	vaccinatorId: {
  		model: 'staff',
  		columnName: 'staff_id'
  	},

  }
};
