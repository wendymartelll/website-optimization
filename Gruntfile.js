module.exports=function(grunt) {
    grunt.initConfig ( {
        responsive_images: {
            dev: {
                options: {
                    engine:'im', sizes:[ {
                        name: 'extra-small', width: 100, suffix: '_0x', quality: 100,
                    }
                    ]
                }, files:[ {
                    expand:true, src:['*.{gif,jpg,png}'], cwd: 'img_src/', dest: 'img/'
                }
                ]
            },
        },
        critical: {
          dist: {
            options: {
              base: './'
            },
            // The source file
            src: 'index.html',
            // The destination file
            dest: 'result.html'
            }
          }
      });
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-critical');
    grunt.registerTask('default', ['responsive_images', 'critical']);
};
