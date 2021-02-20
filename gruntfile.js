const sass = require('node-sass');

module.exports = function(grunt) {
    // require('load-grunt-tasks')(grunt);
     
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
            },
            dist: {
                files: {
                    '/assets/css/main.css': '/assets/scss/override.scss'
                }
            }
        }
    });
     
    grunt.registerTask('default', ['sass']);
};

