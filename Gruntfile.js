/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   concat: {
       options: {
          separator: ';',
          banner: '/*\n\rAdd .removeElement to div, p, ul or ol.\n\rIt\'s all.\n\r\n\rby Tiago Dias @tigo\n\r*/\n\r\n\r;(function(){',
          footer: 'window.addEventListener("load", function(){ init(); });\n\r})();',
        },
     dist: {
       src: ['src/*'],
       dest: 'dist/removeElement.js',
     }
   }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('c', ['concat']);

};
