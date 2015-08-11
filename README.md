# TRAD 
# 
# template for rapid application development 
#
Once this is installed, it should provide a basic interface with sign-in capabilities (and sign-up capabilities)
Access control can be adjusted as required for custom modules in config/policies.js 

Adjustments can be easily made to use database engine / template engine of choice... 

Thanks to Sails for making this relatively easy to set up

Thanks to Irl Nathan & his team for taking the sails initialization a step further with activityOverlord

* General steps taken to build this from scratch....

sails new <NAME>

* Generate some standard reusable models & controllers:

sails generate model user               * cp template ... add additional attributes as required */
sails generate controller user          * cp template ... include additional attributes in create method */
sails generate controller session       * cp template ... 

* add service for authorization 

add api/services/jwToken          

* install extra modules as required 
npm install machinepack-jwt machinepack-jwtauth machinepack-passwords machinepack-gravatar bcrypt --save

* include database framework as desired *
npm install sails-mysql --save

* use jade (my preference only at this stage) **/
config/views.js * change ejs engine to jade 
npm install jade --save

* build/copy some basic view templates ... 403, 404, 500, dashboard, homepage, layout, emptyLayout, privateLayout, publicLayout, signup */ 

* Configuration */

* add basic routes to config/routes.js (login, signup, homepage etc) */

* create config/local.js ... specify database connection specifics */

* copy over required assets: bootstrap, angular */

* force dependent asset order if required (in tasks/pipeline.js) */

* add compareTo.module.js (?) */

* add assets/public/signup/Signup Module & Controller ... */

* add basic HomeController (server side) (and HomepageModule/Controller on client-side) */

* add SessionController (server-side) */

* adjust config/polices.js and api/policies/sessionAuth.js as required... add 'flash' (?) policy */ 

* add some standard responses (eg emailAddressInUse, forbidden...) */

* ADD abc Module(s) as required **/
** add routes
** add views/abc/ views
** add assets/public/js/abc/AbcController.js 
 
