/**
 * StaffController
 *
 * @description :: Server-side logic for managing staff
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/* separate load function only required when model loading requires information from multiple tables */
	load: function (req, res) {
		var id = req.param('id') || 0;
		var query = "SELECT staff.id, user_id, name, email, role, lastLoggedIn, gravatarURL from staff, user where user_id=user.id";

		if (id) query += " AND staff.id = " + id;

		console.log("Q: " + query);
		
		Clinic.query(query, function (err, result) {
			if (err) {
				return res.negotiate(err);
     		}

			if (!result) {
				console.log('no results');
				return res.send('');
			}

			return res.send(result);
	
		});
	},

	/* separate list function only required when query uses or retrieves information from multiple tables */
	list: function (req, res) {
		var id = req.param('id');
		var clinic = req.param('clinic');

		var tables = 'staff';
		var condition = [];
		if (id)  condition.push("staff.id = " + id) 
		if (clinic) { 
			tables += ', clinic_staff'; 
			condition.push("clinic_staff.staff_id=staff.id AND clinic_id = " + clinic);
		}

		var query = "SELECT * from " + tables;
		if (condition.length > 0)  query += " WHERE " + condition.join(' AND ');
		console.log("staff Q: " + query);

 		Staff.query(query, function (err, result) {
			if (err) {
				return res.negotiate(err);
     		}

			if (!result) {
				console.log('no results');
				return res.send('');
			}

			return res.send(result);
	
		});
	},

	edit: function (req, res) {
		console.log("Edit...");
	},

	new: function (req, res) { 
		console.log('new staff form...');
		res.render('clinic/new');
	},

	add: function (req, res) {
		console.log('add staff...');
	},

	manage: function (req, res) { 
		console.log('manage staff...');
	}
	
};

