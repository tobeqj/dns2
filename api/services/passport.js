var bcrypt = require('bcryptjs');
module.exports = {

	hashPassword: function (password, next) {
		bcrypt.hash(password, 10, function (err, hash) {
			password = hash;
			next(err, password);
		});
	},

	validatePassword: function (password, pwd, next) {
		bcrypt.compare(password, pwd, next);
	}
}