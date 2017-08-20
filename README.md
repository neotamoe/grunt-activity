# Intro to Grunt
This activity was completed with two other classmates to review Grunt (task runner) after introductory lecture.  This was done during Prime Digital Academy in the last week of tier 2 (approximately 2/3 of the way through the full program; in the last week of the in-class portion of the program).

## Original Instructions Below:
### Grunt Activity (Peer)
Instructions: Take this working code from Week 5 Code Challenge group Live Solve. Follow the steps below to get Grunt working in this project.

### Steps

1. Install Grunt CLI globally. Follow these instructions: https://gruntjs.com/getting-started
2. Make a server and a client folder. Move all current server code into the server folder and get the server to run again.
3. Create a Gruntfile.js and npm install grunt --save-dev to the project.
4. Add JavaScript minification for the client side code.
  * Make sure the Angular syntax works or set mangle to false.
  * You will need to minify your controllers and services into separate files.
  * Don't forget to npm install with --save-dev the contrib for minification.
5.  Add Grunt copy. Copy angular from node_modules to vendors. Make sure your app still works.
  * You might need to npm install angular as a dependency
  * Don't forget to npm install with --save-dev the contrib for copying.
  * Install another dependency (maybe Boostrap) and have it copy to vendors from node_modules
6. Add a watch task to watch for changes to your scripts and minify them.
  * Have the watch task running in one terminal tab and the server up in another.
  * Don't forget to npm install with --save-dev the contrib for copying.
7.  Add watching for html and css changes too.
8.  .gitignore your minified client scripts. You only need to check in the source code now. Any developers that will work on this project will need to run grunt to generate the minified files. If you want to deploy this you will need to tell Heroku to run grunt too. Here is a tutorial about that if you are interested: https://devcenter.heroku.com/articles/node-with-grunt
9.  Pick one more grunt plugin get it working with your project.
