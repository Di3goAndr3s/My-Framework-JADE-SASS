"use strict";
module.exports = function (grunt) {
  grunt.initConfig({
    project: {
      javascript: {
        main: ['development/js/main.js'],
        ours: ['development/js/angular/*.js'],
        lib: ['development/bower_components/jquery/dist/jquery.min.js', 'development/bower_components/angular/angular.min.js', 'development/bower_components/angular/angular-route.min.js', 'development/bower_components/jquery.easing/js/jquery.easing.min.js', 'development/bower_components/angular-xeditable/dist/js/xeditable.min.js', 'development/bower_components/angular-placeholders/src/img/img.js', 'development/bower_components/angular-bootstrap/ui-bootstrap.min.js', 'development/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js', 'development/bower_components/bootstrap/dist/js/bootstrap.min.js', 'development/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js', 'development/bower_components/**/*.min.js']
//
      },
      pkg: grunt.file.readJSON('./package.json')
    },
    stylus: {
      build: {
        options: {
          compress: false
        },
        files: {
          "development/css/style.css": "development/stylus/main.styl"
        }
      }
    },
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: ["development/bower_components/bootstrap/dist/css/bootstrap.min.css", "development/bower_components/font-awesome/**/*.min.css", "development/bower_components/normalize.css/normalize.css", "development/bower_components/bootstrap/dist/css/bootstrap-theme.min.css", "development/bower_components/angular-xeditable/dist/css/xeditable.css", 'development/bower_components/bootstrap-datepicker/css/datepicker.css'],
        dest: "development/css/lib.css"
      },
    },
   notify: {
    watch: {
      options: {
        title: 'Task Complete',  // optional
        message: 'SASS and Uglify finished running', //required
      }
    },
   jade: {
      options: {
        message: 'Server is ready!'
      }
    }
  },
    jade: {
      compile: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: {
          "production/index.html": ["development/jade/index.jade"],
          "production/views/home.html": ["development/jade/home.jade"],
          "production/views/aboutus.html": ["development/jade/aboutus.jade"],
          "production/views/ourservices.html": ["development/jade/ourservices.jade"],
          "production/views/register.html": ["development/jade/register.jade"],
          "production/views/vacancylist.html": ["development/jade/vacancylist.jade"],
          "production/views/agencyprofile.html": ["development/jade/agencyprofile.jade"],
          "production/views/directories.html": ["development/jade/directories.jade"],
          "production/views/blog.html": ["development/jade/blog.jade"],
          "production/views/calendar.html": ["development/jade/calendar.jade"]
        }
      }
    },
    //    uglify: {
    //      my_target: {
    //        options: {
    //          sourceMap: true,
    //          sourceMapName: 'production/assets/js/sourcemap.map',
    //          banner: '/* Prodcution Javascript */'
    //        },
    //        files: {
    //          'production/assets/js/main.min.js': ['development/js/main.js']
    //        }
    //      }
    //    },
    compress: {
      main: {
        options: {
          archive: 'site.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'production/',
            src: ['**'],
            dest: ''
},
]
      }
    },
    //  csslint: {
    //  lax: {
    //    options: {
    //      import: false
    //    },
    //    src: ['production/assets/css/**/*.css']
    //  }
    //},
    cssmin: {
      minify: {
        expand: true,
        cwd: 'development/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'production/assets/css/',
        ext: '.min.css'
      }
    },
    //  imagemin: {
    //   dynamic: {
    //    options: {
    //     optimizationLevel: 3
    //    },
    //    files: [{
    //     expand: true,
    //     cwd: 'development/img/',
    //     src: ['**/*.{png,jpg,gif}'],
    //     dest: 'production/assets/img/'
    //}]
    //   }
    //  },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['production']
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'development/css/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: 'development/css/' // -> dest/css/file1.css, dest/css/file2.css
      },
    },
    //       htmlmin: {
    //      dist: {
    //        options: {
    //          collapseWhitespace: true,
    //          collapseBooleanAttributes: true,
    //          removeCommentsFromCDATA: true,
    //          removeOptionalTags: true
    //        },
    //        files: [{
    //          expand: true,
    //          cwd: 'production',
    //          src: ['*.html', 'views/{,*/}*.html'],
    //          dest: 'production'
    //        }]
    //      }
    //    },
    watch: {
      options: {
        livereload: true
      },
      //      styles: {
      //        files: ['**/*.less'],
      //        tasks: ['less'],
      //        options: {
      //          nospawn: true,
      //        }
      //      },
      styles: {
        files: ['development/stylus/*.styl'],
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      },
      concat_css: {
        files: ['development/css/*.css'],
        tasks: ['concat_css'],
        options: {
          livereload: true
        }
      },
      //   imagemin: {
      //    files: ['development/img/*.{png,jpg,gif}'],
      //    tasks: [' imagemin'],
      //    options: {
      //     livereload: true
      //    }
      //   },
      jade: {
        files: ['development/jade/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },

      autoprefixer: {
        files: ['development/css/style.css'],
        tasks: ['autoprefixer'],
        options: {
          livereload: true
        }
      },
      cssmin: {
        files: ['development/css/style.css'],
        tasks: ['cssmin'],
        options: {
          livereload: true
        }
      },


      //      uglify: {
      //         files: ['development/js/main.js'],
      //           tasks: ['uglify'],
      //           options: {
      //           livereload: true
      //           }
      //      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default']
      },
      javascript: {
        files: '<%= project.javascript.ours %>',
        tasks: ['concat']
      },
      javascriptMain: {
        files: '<%= project.javascript.main %>',
        tasks: ['concat']
      },
      javascriptLib: {
        files: '<%= project.javascript.lib %>',
        tasks: ['jshint', 'concat']
      }
    },
    concat: {
      javascript_ours: {
        options: {
          banner: '"use strict";\n'
        },
        src: '<%= project.javascript.ours %>',
        dest: 'production/assets/js/app.js'
      },
      javascript_lib: {
        src: '<%= project.javascript.lib %>',
        dest: 'production/assets/js/lib.js'
      },
      javascript_main: {
        src: '<%= project.javascript.main %>',
        dest: 'production/assets/js/main.js'
      }
    },
    //  jshint: {
    //   options: {
    //    strict: false,
    //    laxbreak: true,
    //    debug: true,
    //    globals: {
    //     angular: true,
    //     jQuery: true,
    //     $: true,
    //     _: true
    //    }
    //   },
    //   all: '<%= project.javascript.ours %>'
    //  },
    concurrent: {
      target: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //  grunt.loadNpmTasks('grunt-contrib-less');
  //  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-notify');
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  //    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');

  grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin', 'concat_css', 'jade', 'concat', 'compress', 'connect', 'concurrent', 'notify']);
  grunt.registerTask('production', ['stylus', 'cssmin', 'concat_css', 'jade', 'concat', 'compress', 'autoprefixer', 'connect', 'concurrent']);
  grunt.registerTask('dev', ['stylus', 'cssmin', 'jade', 'concat_css', 'concat', 'autoprefixer', 'connect', 'concurrent']);


};
