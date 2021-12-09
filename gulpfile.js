
// --------------------------------------------------

const gulp = require( "gulp" );
const browsersync = require( "browser-sync" ).create( "Sandbox" );

// --------------------------------------------------

const server_start = function( callback )
{
	browsersync.init(
	{
		"server": { baseDir: "." },
		"port": 3000
	});

	callback();
}

// --------------------------------------------------

const watch_stylesheet = function( callback )
{
	const watchlist = [ "styles.css" ];
	gulp.watch( watchlist , function resync_stylesheet( callback ){ browsersync.reload( watchlist ); callback(); } );
	callback();
}

// --------------------------------------------------

const watch_scripts = function( callback )
{
	const watchlist = [ "scripts.js" ];
	gulp.watch( watchlist , function resync_scripts( callback ){ browsersync.reload( watchlist ); callback(); } );
	callback();
}

// --------------------------------------------------

const watch_html = function( callback )
{
	const watchlist = [ "index.html" ];
	gulp.watch( watchlist , function resync_html( callback ){ browsersync.reload( watchlist ); callback(); } );
	callback();
}

// --------------------------------------------------

exports.go = gulp.series
(
	
	gulp.parallel
	(
		server_start,
		watch_stylesheet,
		watch_scripts,
		watch_html
	)
);

exports.default = exports.go;

// --------------------------------------------------
