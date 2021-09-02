const assert = require('assert');
const chai = require('chai');
const app = require('../app');


let userID, userEmail, password;
let url = 'http://localhost:3001/register'
let userMock =   { json: {
				    username: 'TestUser',
				    email: 'testuser@gmail.com',
				    password: 'TestPassword'
				  } 
				}
describe('register Routes', () => {

	// test pour la methode register user 
	describe('POST new user route - /register', () => {
		it('should create new user', done => {
			chai.request(app)
            .post(url, userMock, (err, res, body) => {
	            userID    = body.id
	            userEmail = body.email
				password = body.password

	            assert.equal(200, res.statusCode);
	  			done()
		    });
		});
	});

});