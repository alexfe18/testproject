const { BaseController } = require('./BaseController');

class UsersController extends BaseController {
	constructor() {
		super();
		this.API_REGISTER = '/auth/signup';
	}

	async registerUser(email, password, name, surname) {
		return this.post(this.API_REGISTER, {
			email,
			password,
			name,
			surname,
		});
	}
}

module.exports.UsersController = UsersController;
