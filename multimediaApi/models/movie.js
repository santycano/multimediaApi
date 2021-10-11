var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var cast = new Schema({ name: String });

var movieSchema = new Schema({
	id: 			{ type: Number, unique : true, required : true },
	imdbId: 		{ type: String },
	imdbRating:		{ type: Number },
	title:  		{ type: String, unique : true, required : true },
	poster: 		{ type: String, unique : true, required : true },
	backdrop: 		{ type: String, unique : true, required : true },
	trailer:		{ type: String, unique : true, required : true },
	overview: 		{ type: String, unique : true, required : true },
	director: 		{ type: String, required : true },
	cast:  			{ type: [String], required : true },
	release_date:	{ type: String, required : true },
	start_date: 	{ type: String, required : true },
	end_date: 		{ type: String, required : true },
	runtime: 		{ type: Number, required : true },
	mpaa: 			{ type: String }

});

module.exports = mongoose.model('Movie', movieSchema);
