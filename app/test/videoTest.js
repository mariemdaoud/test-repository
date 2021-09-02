const assert = require('assert');
const chai = require('chai');
const app = require('../app');


let videoID;
let url = 'http://localhost:3001/videos'
let videoMock =   { json: {
					videoID: 'VID001',
				    nom: 'Video1',
				    description: 'la vidéo numéro 1',
				    url: 'http://vid001.com'
				  } 
				}
describe('Videos Routes', () => {

	// test pour la methode ajouter video
	describe('POST new video route - /videos', () => {
		it('should create new video', done => {
			chai.request(app)
            .post(url, videoMock, (err, res, body) => {
	            videoID    = body.videoID
	            nom = body.nom
				description = body.description
				url = body.url

	            assert.equal(200, res.statusCode);
	  			done()
		    });
		});
	});

    // test pour la methode get all user sans pagination
	describe('GET all videos route - /videos', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

	// test pour la methode get all user avec pagination (page 0 avec 5 elements)
	describe('GET all videos route - /videos', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url + '?page=0&size=5', (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode get video by id
	describe('GET video route - /videos/:videoid', () => {
		it('should return 200', done => {
			chai.request(app)
            .get(url + '/' + videoID, (err, res, body) => {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});

    // test pour la methode update user
	describe('PUT update user route - /videos/:videoID', () => {
		it('should update video info', done => {
			chai.request(app)
            .put(url + '/' + videoID, videoMock, (err, res, body) => {
				assert.equal(1, res.body);
				done();
			})
		})
	})

    // test pour la methode delete video
	describe('DELETE  video route - /videos/:videoId', () => {
		it('should successfully delete Test video', done => {
			chai.request(app)
            .delete(url + '/' + videoID, (err, res, body) => {
		        assert.equal(1, res.body);
		        done()
			});
		})
	})
})