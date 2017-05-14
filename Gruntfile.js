module.exports=function(grunt) {
    grunt.initConfig( {
        responsive_images: {
            dev: {
                options: {
                    engine:'im', sizes:[ {
                        name: 'extra-small', width: 100, suffix: '_0x', quality: 100,
                    }
                    ]
                }
                , files:[ {
                    expand:!0, src:['*.{gif,jpg,png}'], cwd: 'img_src/', dest: 'img/'
                }
                ]
            }
            ,
        }
        , critical: {
            dist: {
                options: {
                    base: './'
                }
                , src:'index.html', dest:'result.html'
            }
        }, uglify: {
          js: {
              src: ['js/perfmatters.js'],
              dest: 'js/perfmatters.min.js'
            }
        }, cssmin: {
          my_target: {
            files: [{
              expand: true,
              cwd: 'css/',
              src: ['*.css', '!*.min.css'],
              dest: 'css/',
              ext: 'min.css'
            }]
          }
        }, htmlmin: {
          dist: {
            dev: {
              files: [{
                expand: true,
                cwd: '/index.html',
                src: ['*.html'],
                dest: '/index.html',
                ext: '.min.html'
              }]
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['responsive_images', 'critical', 'contrib-uglify', 'contrib-cssmin', 'contrib-htmlmin']);
}
