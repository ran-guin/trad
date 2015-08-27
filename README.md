# OVID 

# Online Vaccine & Immunization Database

This is a UI for community based tracking of Vaccine & Immunization Records

Migrating Existing Data into database:
* upload Vaccine data
**  insert into vaccine (name, code, description, effectiveMonths, minDoseInterval, recommendationLevel, targetGroup) select Vaccine_Name, Vaccine_Name, Vaccine_Description, 6,1, 'Recommended', 'Adults' from vaccine.Vaccine;
* upload Disease data
**  insert into disease select Disease_Name, concat('desc of ',Disease_Name), Disease_Link, '','','' from vaccine.Disease where Disease_ID < 30;
* add clinic
* add staff
* add patients

* define foreign key constraints if using mysql (?)


