const assert = require('assert');
const chai = require('chai');
const app = require('../app');


let tagID;
let url = 'http://localhost:3001/tags'
let tagMock =   { json: {
					tagID: 'tag001',
				    value: 'le tag numéro 1'
				  } 
				}
describe('Tags Routes', () => {

	// test pour la methode ajouter tag
	describe('POST new video route - /tags', () => {
		it('should create new video', done => {
			chai.request(app)
            .post(url, tagMock, (err, res, body) => {
	            tagID = body.tagID
	            value = body.value

	            assert.equal(200, res.statusCode);
	  			done()
		    });
		});
	});

    // test pour la methode get all tags sans pagination
	describe('GET all tags route - /tags', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode get tag by id
	describe('GET tag route - /tags/:tagid', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url + '/' + tagID, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode update tag
	describe('PUT update tag route - /tag/:tagID', () => {
		it('should update video info', done => {
			chai.request(app)
            .put(url + '/' + tagID, tagMock, (err, res, body) => {
				assert.equal(1, res.body);
				done();
			})
		})
	})

    // test pour la methode delete tag
	describe('DELETE  tag route - /tags/:tagId', () => {
		it('should successfully delete tag', done => {
			chai.request(app)
            .delete(url + '/' + tagID, (err, res, body) => {
		        assert.equal(1, res.body);
		        done()
			});
		})
	})
})