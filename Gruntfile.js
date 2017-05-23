module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          //destination file : target file
          'server/public/scripts/client.min.js': ['client/scripts/script.js'],
          'server/public/scripts/service.min.js': ['client/scripts/heroService.js']

          //services and controllers need to be separate
        }
      }
    },
    watch: {
      files: ['client/scripts/*.js', 'server/public/styles/*.css', 'server/public/views/*.html'],
      tasks: ['uglify','htmlmin']
    },
    copy: {
      main: {
        files: [
          {expand:true, cwd: 'node_modules',src: ['angular/**','bootstrap/**'], dest: 'server/public/vendors'}
        ]
      }
    },
    htmlmin: {
      dist:{
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'server/public/views/index.min.html': 'client/views/index.html'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');



  //in terminal: grunt name
  // in code: grunt.registerTask('name',['watch']);

//can just type 'grunt' in terminal
//must put other tasks in front of watch because watch blocks
  grunt.registerTask('default',['copy','htmlmin','watch']);
};
