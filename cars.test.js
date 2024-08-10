const { CarsController } = require('../../src/controllers/CarsController');
const { UsersController } = require('../../src/controllers/UsersController');

describe('Car creation tests', () => {
	let carsController;
	let userController;

	beforeAll(async () => {
		userController = new UsersController();
		await userController.registerUser(
			'alexfedorchuk@mail.com',
			'TestPassword123',
			'Test',
			'User'
		);
		await userController.login();
		carsController = new CarsController();
		carsController._axiosConfig.headers = userController._axiosConfig.headers; // Передаємо заголовки з cookie
	});

	afterAll(async () => {
		const cars = await carsController.getCars();
		for (let car of cars.data.cars) {
			await carsController.deleteCarById(car.id);
		}
	});

	it('should create cars for all brands and models', async () => {
		const brands = [
			/* всі можливі бренди */
		];
		for (let brand of brands) {
			const models = brand.models;
			for (let model of models) {
				const response = await carsController.createCar(
					brand.id,
					model.id,
					1000
				);
				expect(response.status).toBe(200);
				expect(response.data).toBeDefined();
			}
		}
	});

	// Негативні сценарії
	it('should fail to create a car with invalid brand id', async () => {
		const response = await carsController.createCar(-1, 1, 1000);
		expect(response.status).toBe(400);
	});

	it('should fail to create a car with invalid model id', async () => {
		const response = await carsController.createCar(1, -1, 1000);
		expect(response.status).toBe(400);
	});

	it('should fail to create a car with missing mileage', async () => {
		const response = await carsController.createCar(1, 1, null);
		expect(response.status).toBe(400);
	});
});
