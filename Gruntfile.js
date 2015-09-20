'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: 'js/application.map'
      },
      target: {
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
      },
      pizza: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'views/css',
          src: ['*.css', '!*.min.css'],
          dest: 'views/css',
          ext: '.min.css'
        }        ]
      }
    },
    responsive_images: {
      resize: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'resize',
            width: '100px',
            suffix: '_100px',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}', '!*_100px.{gif,jpg,png}'],
          cwd: 'views/images/',
          dest: 'views/images/'
        }]
      },
      compress: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'compress',
            width: '100%',
            suffix: '_compress',
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}', '!*_compress.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    },
    pagespeed: {
      options: {
        nokey: true,
        url: 'http://ce572d63.ngrok.io'
      },
      target: {
        options: {
          nokey: true,
          url: 'http://ce572d63.ngrok.io',
          locale: 'en_GB',
          strategy: ['desktop', 'mobile'],
          threshold: 80
        }
      },
      paths: {
        options: {
          paths: ['/project-2048.html', '/project-mobile.html', '/project-webpref.html'],
          locale: 'en_GB',
          strategy: ['desktop', 'mobile'],
          threshold: 80
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('default', ['uglify', 'cssmin', 'responsive_images']);

};