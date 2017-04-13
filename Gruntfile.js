module.exports=function(grunt) {
    grunt.initConfig ( {
        responsive_images: {
            dev: {
                options: {
                    engine:'im', sizes:[ {
                        name: 'extra-small', width: 80, suffix: '_0x', quality: 90,
                    }
                    , {
                        name: 'small', width: 200, suffix: '_1x', quality: 88
                    }
                    ]
                }
                , files:[ {
                    expand:true, src:['*.{gif,jpg,png}'], cwd: 'img_src/', dest: 'img/'
                }
                ]
            }
            ,
        }
        ,
    }
    );
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images'])
}

;
