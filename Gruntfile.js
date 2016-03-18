'use strict';
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/*.html',
          'app/views/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '.tmp/scripts/{,*/}*.js',
          'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            'app'
          ]
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/**/*.js'
      ]
    },
    uglify: {
      myTarget: {
        files: {
          'dist/scripts/app.min.js': ['app/app.js']
        }
      }
    },
    jasmine: {
      all: {
        src: 'app/app.js',
        options: {
          vendor: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/bardjs/dist/bard.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular-animate/angular-animate.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/underscore/underscore-min.js'
          ],
          keepRunner: true,
          specs: 'test/functional/*Spec.js'
        }
      }
    }
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'jasmine',
    'uglify'
  ]);

};
