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
        src: ['app/components/**/*.js','app/app.js'],
        options: {
          vendor: [
            'app/assets/bower_components/angular/angular.min.js',
            'app/assets/bower_components/angular-mocks/angular-mocks.js',
            'app/assets/bower_components/sinon/index.js',
            'app/assets/bower_components/bardjs/dist/bard.js',
            'app/assets/bower_components/jquery/dist/jquery.min.js',
            'app/assets/bower_components/angular-animate/angular-animate.min.js',
            'app/assets/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'app/assets/bower_components/underscore/underscore-min.js'
          ],
          keepRunner: true,
          specs: 'test/**/*Spec.js'
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
