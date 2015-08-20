var mongoose = require('mongoose');

var Member = new mongoose.Schema({
	name: String,
	email: { type: String, unique: true },
	password: String,
	salt: String,
	gender: Number,
	birthday: Date,
	hashname: { type: String },
	phone: String,
	idno: String,
	tokens: [ String ],
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now }
});

Member.methods.validPassword = function(password) {
    return (this.password == password) ? true : false;
};

module.exports = mongoose.model('Member', Member);