const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: true,
	},
	name: {
		type: String,
		trim: true,
		required: true,
	},
}, { collection: 'players' })


module.exports = exports = mongoose.model('User', UserSchema)
