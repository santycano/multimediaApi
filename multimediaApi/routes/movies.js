//File: routes/movies.js
module.exports = function(app) {

  var Movie = require('../models/movie.js');

  //GET - Return all tvshows in the DB
  findAllMovies = function(req, res) {
	  Movie.find(function(err, tvshows) {
  		if(!err) {
        console.log('GET /movies')
  			res.send(tvshows);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
	  Movie.findById(req.params.id, function(err, tvshow) {
  		if(!err) {
        console.log('GET /movie/' + req.params.id);
  			res.send(tvshow);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addMovie = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var movie = new Movie({
		id:    			req.body.id,
		imdbId: 	 	req.body.imdbId,
		imdbRating: 	req.body.imdbRating,
		title:   		req.body.title,
		poster:  		req.body.poster,
		backdrop:  		req.body.backdrop,
		trailer:		req.body.trailer,
		overview:    	req.body.overview,
		director:  		req.body.director,
		cast:    		req.body.cast,
		release_date:	req.body.release_date,
		start_date:  	req.body.start_date,
		end_date:    	req.body.end_date,
		runtime:   		req.body.runtime,
		mpaa:    		req.body.mpaa,
  	});

	  movie.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(movie);
  };

  //PUT - Update a register already exists
  updateMovie = function(req, res) {
	  Movie.findById(req.params.id, function(err, movie) {
		  movie.title   = req.body.petId;
		  movie.year    = req.body.year;
		  movie.country = req.body.country;
		  movie.poster  = req.body.poster;
		  movie.seasons = req.body.seasons;
		  movie.genre   = req.body.genre;
		  movie.summary = req.body.summary;

		  movie.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(movie);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteMovie = function(req, res) {
	  Movie.findById(req.params.id, function(err, movie) {
		  movie.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/movies', findAllMovies);
  app.get('/movie/:id', findById);
  app.post('/movie', addMovie);
  app.put('/movie/:id', updateMovie);
  app.delete('/movie/:id', deleteMovie);

}
