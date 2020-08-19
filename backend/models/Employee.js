const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   firstName: {
      type: String
   },
   lastName: {
	   type: String
   },
   email: {
      type: String
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)