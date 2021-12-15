const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = () =>{
	const User = Schema(
		{
			name:{type:String, required: true},
			email:{type: String, required: true},
			password:{type: String, required: true}
		},
		{
			timestamps: true,
		}
	);

	return mongoose.model('user', User)
}
