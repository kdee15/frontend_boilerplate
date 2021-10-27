# LAB DIGITAL Frontend Workflow

Any future additions or improvements should be done in separate branches by branching out from master. When you are satisfied with the change and everything is working please ping @kdee15 to review and merge back into master.

Descriptions of processes to follow


## Processes

### gulp watch (gulp)

Gulp (run: gulp) command launches following task and its subtasks:

   1. default
      1. compile-sass
      2. compile-sass-blocks
      3. compile-js
      4. compile-html
      5. minify-css-block
      6. minify-css
      
### gulp compile-sass
Compiles all the files from build/scss to dist/css
      
### gulp compile-sass-blocks
Compiles all the files from build/scss/04_templates to templates. This allows for us to configure stand-alone blocks/widgets/templates for use with technologies like gutenberg, angular or react where we want to build self contained HTML snippets

### gulp compile-js
Compiles all the files from build/js to dist/js

### gulp compile-html
Compiles all the files from build/html including partials to static-html allowing us to view the usable partials built in build/html/partials
      
### gulp minify-css-block
Minifies the template css in the various template folders      
  
### gulp minify-css
Minifies the css  

**All of the above can be used as unique tasks which are run in the following manner: gulp compile-sass, gulp compile-sass-blocks, gulp compile-js, gulp compile-html, gulp minify-css-block, gulp minify-css**
  
### gulp minify-all
Minifies all css files
  
### gulp deploy-all
runs all processes in the gulp watch file and then minifies css and uglifies js - this is a good command to run in prep for production deploy, or the function to call on servers with automated gulp processes
     
#### All external libraries should be installed via bower so we have clean package management and should not be touched instead we should use the following gulp tasks to copy and use a local version

### gulp install-css
Installs a local instance outside bower folder of css libraries specified in the config.json

### gulp update-css
Updates existing local instance of the css libraries


### gulp install-js
Installs existing local instance of the js libraries

### gulp concat-js
Concatinates all the javascript files into one
