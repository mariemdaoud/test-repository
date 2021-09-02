const assert = require('assert');
const chai = require('chai');
const app = require('../app');


let userID;
let url = 'http://localhost:3001/users'
let userMock =   { json: {
				    username: 'TestUser',
				    email: 'testuser@gmail.com',
				    password: 'TestPassword'
				  } 
				}
describe('User Routes', () => {

    // test pour la methode get all user
	describe('GET all users route - /users', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode get user by id
	describe('GET users route - /users/:userid', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url + '/' + userID, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode update user
	describe('PUT update user route - /users/:userid', () => {
		it('should update user info', done => {
			chai.request(app)
            .put(url + '/' + userID, userMock, (err, res, body) => {
				assert.equal(1, res.body);
				done();
			})
		})
	})

    // test pour la methode delete user
	describe('DELETE  user route - /users/:userid', () => {
		it('should successfully delete Test User', done => {
			chai.request(app)
            .delete(url + '/' + userID, (err, res, body) => {
		        assert.equal(1, res.body);
		        done()
			});
		})
	})
})