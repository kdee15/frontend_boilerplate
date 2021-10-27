# Sitecore frontend workflow

Any future additions or improvements should be done in separate branches by branching out from master. When you are satisfied with the change and everything is working please ping @Kirk or @Goran to review and merge back into master.

Descriptions of functionallities to follow


##Functionalities

### gulp webserver

Gulp webserver command launches following task and its subtasks:

   1. default
      1. compile-sass
      2. compile-js
      3. compile-html
      
###gulp compile-sass
Compiles all the files from build/scss to dist/css

###gulp compile-js
Compiles all the files from build/js to dist/js

###gulp compile-html
Compiles all the files from static_html/src including partials to build/html allowing us to use partials in static_html/src/partials


**All of the above can be used as unique tasks which are run in the following manner: gulp compile-jsm gulp-compile-sass, gulp compile-html**
      
   
    
    
###gulp minify-css
Minifies the css  
     
     

####All external libraries should be installed via bower so we have clean package management and should not be touched instead we should use the following gulp tasks to copy and use a local version

###gulp install-css
Installs a local instance outside bower folder of css libraries specified in the config.json


###gulp install-css
Installs a local instance outside bower folder of css libraries specified in the config.json

###gulp update-css
Updates existing local instance of the css libraries


###gulp install-js
Installs existing local instance of the js libraries

###gulp concat-js
Concatinates all the javascript files into one