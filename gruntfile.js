module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: {
          'assets/css/override.css' : 'assets/scss/style.scss'
        }
      }
    }

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};