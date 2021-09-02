const assert = require('assert');
const chai = require('chai');
const app = require('../app');


let url = 'http://localhost:3001/login'
let userMock =   { json: {
				    username: 'TestUser',
				    password: 'TestPassword'
				  } 
				}
describe('login Routes', () => {

	// test pour la methode login user 
	describe('POST login user route - /login', () => {
		it('should return success message', done => {
			chai.request(app)
            .post(url + '/login', userMock, (err, res, body) => {
	            assert.equal('successful login!', res.body.message);
	  			done()
		    });
		})
	})

	
})