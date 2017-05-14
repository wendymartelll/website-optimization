# Website Optimization project
The objective of this project is to optimize rendering and functionality.
There are two parts to this project; each focuses on a different aspect of web optimization.

1. PageSpeed Score
  - Optimize the Critical Rendering Path to achieve a score of at least 90 on PageSpeed Insights for both mobile and desktop

2. Getting Rid of Jank
  - Achieve a consistent rate of 60fps when scrolling
  - Resize time is less than 5ms for pizza sliders

## Running the Apps (And Grunt)
###### PageSpeed Score  
   - To run the first part, go to the settings of https://github.com/jawaka72/website-optimization,
  scroll to GH Pages and open the URL in your browser. Or, just go [here](https://jawaka72.github.io/website-optimization/).
   - Next, go to https://developers.google.com/speed/pagespeed/insights/.
   - Copy and past the GH Pages URL into the input box and click the 'analyze' button.
   - Glorify in the fast page speed scores for mobile and desktop.
###### Running Locally  
  - To run the application locally, from the command line cd to where you downloaded the repo.
  - type ```python -m SimpleHTTPServer 8000```
  - In your browser, type localhost: 8000

###### Getting Rid of Jank
   - To run the second part, go to https://github.com/jawaka72/website-optimization and
   clone the repo.
   - From your command line, navigate to the cloned repository
   - Find the 'views' folder
   - Open pizza.html in the browser of your choice.
   - Bask in jank-free paradise by scrolling freely and clicking the pizza slider button for
     all the eternities.
###### Grunt
    The build, task runner Grunt was used to optimize images and minify css, html, and js files. It runs as follows:
      - In your command line, navigate to the folder where you cloned the repo.
      - type ``` 'grunt init' ```
      - Go through the instructions to create a package.json file.
      - Create a Grunt.js file
      - Back in the command line, type ``` 'npm install grunt -image-responsive --save-dev' ```
      - In the Grunt.js file, configure your task by entering the following:
       ```
       module.exports=function(grunt) {
           grunt.initConfig( {
               responsive_images: {
                   dev: {
                       options: {
                           engine:'im',
                           sizes:[ {
                               name: 'name_here',
                               width: 'some_number',
                               'suffix': 'some_name',
                               'quality': 'some_number'
                           }
                           ]
                       }
                       , files:[ {
                           expand:,
                           src:['image_sources'],
                           cwd: 'img_src/',
                           dest: 'img/'
                       }
                       ]
                   }
                   ,
               }
               grunt.loadNpmTasks('grunt-responsive-images');
               grunt.loadNpmTasks('grunt-critical');
               grunt.loadNpmTasks('grunt-contrib-uglify');
               grunt.loadNpmTasks('grunt-contrib-cssmin');
               grunt.loadNpmTasks('grunt-contrib-htmlmin');
               grunt.registerTask('default', ['responsive_images', 'critical', 'contrib-uglify', 'contrib-cssmin', 'contrib-htmlmin']);
           }
       ```
       - Fill out the sizes and files sections with your specific files and desires.
       -
       - In the command line type, '''grunt run'''
       - Files will automatically resize
       - The set up is the exact same for uglifyJS, cssmin, anf htmlmin, but do not invlude the ```engine``` and ```sizes``` options as seen in the responsive_images configuation. Instead, simply fill in the ```files``` section.
       - In the command line, type ```grunt uglify```, ```grunt cssmin```, and ```grunt htmlmin```, respectively.
##Optimization Details
1. PageSpeed Score
  - There are several methods used to optimize the CRP for this part of the project. The single biggest optimization was using Grunt image-responsive. This task runner shrunk the overall file size of the images by reducing their physical width and height as well as slightly decreasing their resolution.
  - Script tags have an 'asyn' and 'deferred' attribute for asynchronous actions.
  - Critical CSS is inlined in the head of the html file
  - Cache control is enabled
  - Grunt uglifyJS, cssmin, and htmlmin were used to minify files even further.

2. Getting Rid of Jank
  - The two main functionalities that were optimized are scrolling and changing the pizza sizes.
  - Scrolling: To optimize scrolling, Layout thrashing had to be addressed. This is when a function is performing layout and styles in quick succession repeatedly. This was the case for the loop that implemented scrolling.
    - First, ```document.body.scrollTop``` was moved out of the loop to stop forced synchronous layout (FSL).
    - In the loop, the modulo operation was moved into its own var.
    - Finally, in CSS ```will-change: transform;
                         transform: translateZ(0);
                         backface-visibility: hidden;```
      were added to help with layering of the moving pizzas in the background.
    - Finally, instead of using element.querySelectorAll(), element.getElementsByClassName was used to specifically target the desired element.
  - Changing pizza sliders: To optimize this, layout thrashing also needed to be fixed.
    - First, the DetermineDx() function was removed as it did nothing but complicate layout.
    - Second, the switch statement and loop were wrapped in the changePizzaSizes() function.
    - Finally, instead of using element.querySelectorAll(), element.getElementsByClassName was used to specifically target the desired element.
