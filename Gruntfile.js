module.exports = function(grunt) {  
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'),  
    concat: {  
      options: {  
        separator: ';'  
      },  
      dist: {  
        src: ['public/javascripts/**/*.js'],  
        dest: 'dist/<%= pkg.name %>.js'  
      }  
    },
    uglify: {  
      options: {  
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'  
      },  
      dist: {  
        files: {  
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']  
        }  
      }  
    }, 
    jshint: {  
      files: ['public/javascripts/**/*.js', 'routes/**/*.js'],  
      options: {  
        // options here to override JSHint defaults  
        globals: {  
          console: true,  
          module: true,  
          document: true  
        }  
      }  
    },
    copy: {
      bower: {
        files: [
          {
            flatten : true,
            expand : true,
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css'
            ],
            dest: 'public/stylesheets/'
          },
          {
            flatten : true,
            expand : true,
            src: [
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'bower_components/jquery/dist/jquery.min.js'
            ],
            dest: 'public/javascripts/'
          }]
      }
    },
    watch: {  
      files: ['<%= jshint.files %>'],  
      tasks: ['jshint']  
    },
    exec: {
      bower: {
        command: 'bower install --quiet',
        stdout: true,
        stderr: true
      },
      npm: {
        command: 'npm install --no-color --quiet',
        stdout: true,
        stderr: true
      }
    }
  }); 

  grunt.registerTask('setup', ['copy:bower', 'exec']);
  grunt.registerTask('default', ['setup', 'jshint', 'concat', 'uglify']);  
}; 