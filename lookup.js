
const cities = require('cities');
exports.city = function (zipCode){
    var city;if(zipCode) {
        city = cities.zip_lookup(zipCode).city;
    }
    else {
        city = 'not found';      
   }   
     return city
}

exports.state = function (zipCode){
    var state;
    if(zipCode) {
        state = cities.zip_lookup(zipCode).state;
    }
    else {
        state = 'not found';     
   } 
    return state
}