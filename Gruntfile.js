module.exports = function(grunt) {


  grunt.initConfig({
	    uglify:{
	        options:{
	            mangle:false
	        },
	        build:{
	            files:{
	                "dist/jqueryPlugins.min.js":[ "js/jquery.1.11.3.min.js","js/public.js" ]
	            }
	        }
	    },
	    cssmin:{
	        compress:{
	            files:{
	                "dist/all.min.css":[ "css/style.css", "css/bootstrap.css" ]
	            }
	        }
	
	    }
  	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	// Default task(s).
	grunt.registerTask("default", [ /*"uglify",*/ "cssmin" ]);

};
