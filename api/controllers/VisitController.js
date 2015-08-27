/**
 * VisitController
 *
 * @description :: Server-side logic for managing visits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	home: function (req, res) {
		var id = req.param('id') || 0;
		console.log('clinic home');
	    if (req.session && req.session.params) {
	      var page = req.session.params.defaultPage || 'homepage';

          console.log("Tweak Session Parameters from VisitController");

	      req.session.params['item_Class'] = 'vaccine';
	      req.session.params['search_title'] = "Search for Standard Vaccines using any of fields below";
	      req.session.params['add_to_scope'] = true;
 
	      /* temporarily hardcode for example... retrieve clinic data from api ... */

			var query = "SELECT clinic.name as clinic, clinic_id, clinic.address, user.name as user, clinic_staff, staff.role from (clinic) LEFT JOIN visit ON visit.clinic_id=clinic.id LEFT JOIN clinic_staff__staff_clinics AS CS ON CS.staff_clinics=clinic.id LEFT JOIN staff ON CS.clinic_staff=staff.id LEFT JOIN user on staff.user_id=user.id";
			if (id) { query += " WHERE visit.id =" + id }

			console.log("Q: " + query);
			Visit.query(query, function (err, result) {
				if (err) {
					return res.negotiate(err);
		 		}

				if (!result) {
					console.log('no results');
					return res.send('');
				}

				console.log("CLINICS: " + JSON.stringify(result));

				var clinicStaff = [];
				for (var i=0; i<result.length; i++) {
					var staffInfo = {
						'id' : result[i]['clinic_staff'],
						'name' : result[i]['user'],
						'role' : result[i]['role'],
						'status' : result[i]['dutyStatus'],
					}
				}

				/** load clinic info **/
				req.session.params['Config']['clinic'] = {
					id: result[0]['clinic_id'],
					name: result[0]['clinic'],
					staff: clinicStaff	
				};

				res.render('visit/Visit', req.session.params );
			});
	    }
	    else {
	      console.log("No user defined ... default to public homepage");
	      res.render('public', {message: "No user defined ... default to public homepage"});
	    }

	},

	/* separate load function only required when model loading requires information from multiple tables */
	load: function (req, res) {
		var id = req.param('id') || 0;

		var query = "SELECT * from visit where visit_id = id";
		console.log("Q: " + query);
		Visit.query(query, function (err, result) {
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
		var user = req.param('user');
		var local = req.param('local');
		var staff = req.param('staff');

		var tables = 'visit';
		var condition = [];
		if (id)  condition.push("id = " + id) 
		if (local) { }  // add distance logic
		if (user) { }     // most recent ?

		var query = "SELECT * from " + tables;
		if (condition.length > 0)  query += " WHERE " + condition.join(' AND ');

		console.log("visit Q: " + query);
 		Visit.query(query, function (err, result) {
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
		console.log('new visit form...');

		Visit.query("desc visit", function (err, result) {
			if (err) {
				return res.negotiate(err);
     		}

			if (!result) {
				console.log('no results');
				return res.send('');
			}

			res.render('record/new', { fields: result });
		});
	},

	add: function (req, res) {
		
		console.log('add visit...');

		Visit.query("desc visit", function (err, result) {
			if (err) {
				return res.negotiate(err);
     		}

			if (!result) {
				console.log('no results');
				return res.send('');
			}

			console.log("fields: " + JSON.stringify(result));
			var keys = result.keys;
			console.log('K: ' + JSON.stringify(keys));
			
			var data = {};
			for (var i=0; i< results.length; i++) {
				var field = results[i]["Field"];

				data[field] = req.param(field);
			}
			console.log('Data: ' + JSON.stringify(data));
	/*

	    Visit.create(data, function Created(err, newUser) {
            if (err) {
            	return res.negotiate(err);
            }
    		
            console.log('created: ' + JSON.stringify(newRecord));
	*/
		});
	}

};

