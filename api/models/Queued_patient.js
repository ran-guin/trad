/**
* Queued_patient.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'queued_patient',

	attributes: {

		position: {
			type: 'integer'
		},

		status: {
			type: 'string',
	  		enum: ['Queued', 'Ready','In Process','Cancelled','Prioritized','Appointment'],
	  		defaultsTo: 'Queued'

		},

		arrivalTime: {
			type: 'datetime',
			defaultsTo: new Date()
		},

		reason: {
			type: 'string'
		},

		// Foreign Key references 

		// Data entry staff 
		staffId: {
			model: 'staff',
			columnName: 'staff_id'
		},

		patientId: {
			model: 'patient',
			columnName: 'patient_id'
		},

		visitId: {
			model: 'visit',
			columnName: 'visit_id'
		},

		queueId: {
			model: 'queue',
			columnName: 'queue_id'
		},

		vaccinatorId: {
			model: 'staff',
			columnName: 'vaccinator_id'
		},


	}
};

