/**
 * ClinicController
 *
 * @description :: Server-side logic for managing clinics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	home: function (req, res) {
		var id = req.param('id') || 0;
		console.log('clinic home');
	    if (req.session && req.session.params) {
	      var page = req.session.params.defaultPage || 'homepage';

	      req.session.params['page'] = {};
	      req.session.params['page']['item_Class'] = 'patient';
	      req.session.params['page']['search_title'] = "Search for Patients using any of fields below";
	      req.session.params['page']['add_to_scope'] = true;

	      Clinic.load({'clinic_id' : id}, function (err, result) {	        
	        if (err) {  return res.negotiate(err) }

	        if (!result) {
	          console.log('no results');
	          return res.send('');
	        }
	    	
	    	console.log("RESULT:" + JSON.stringify(result));

	    	req.session.params['clinic'] = result['clinic'];

	        res.render('clinic/Clinic', req.session.params);
	      });
	    }
	    else {
	      console.log("No user defined ... default to public homepage");
	      res.render('public', {message: "No user defined ... default to public homepage"});
	    }

	},

	/* separate load function only required when model loading requires information from multiple tables */
	load: function (req, res) {

	},

	/* separate list function only required when query uses or retrieves information from multiple tables */
	list: function (req, res) {
		var id = req.param('id');
		var user = req.param('user');
		var local = req.param('local');
		var staff = req.param('staff');

		var tables = 'clinic';
		var condition = [];
		if (id)  condition.push("id = " + id) 
		if (local) { }  // add distance logic
		if (user) { }     // most recent ?
		if (staff) { 
			tables += ', clinic_staff'; 
			condition.push("clinic_staff.staff_id=staff.id AND staff_id = " + staff);
		}

		var query = "SELECT * from " + tables;
		if (condition.length > 0)  query += " WHERE " + condition.join(' AND ');

		console.log("clinic Q: " + query);
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

	edit: function (req, res) {
		console.log("Edit...");
	},

	new: function (req, res) { 
		console.log('new clinic form...');

		Clinic.query("desc clinic", function (err, result) {
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
		
		console.log('add clinic...');

		Clinic.query("desc clinic", function (err, result) {
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

	    Clinic.create(data, function Created(err, newUser) {
            if (err) {
            	return res.negotiate(err);
            }
    		
            console.log('created: ' + JSON.stringify(newRecord));
	*/
		});
	}

};

