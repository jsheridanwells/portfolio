/*Configured to lint, update css, compile to built.js and refresh the browser*/

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$", "window"],
        esnext: true,
        globalstrict: true,
        reporter: require('jshint-stylish')
      },
      files: ['../js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/styles.scss'
        }
      }
    },
    concat: {
      js: {
              files: {'../dist/built.js': '../js/**/*.js' }
          }
    },
    connect: {
      server: {
        options: {
          base: '../',
          hostname: 'localhost',
          port: 3000,
          livereload: true,
          open: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'concat']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'concat', 'connect', 'watch']);
};