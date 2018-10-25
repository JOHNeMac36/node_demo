# expressjs_intro
## This is an intro into using expressjs to create an http server

### Depenencies
Nodejs and expressjs. Since expressjs is not a built-in Ndejs module, you have to init your directory as a Nodejs project and then install expressjs into your project
directory. This is done by running: `npm init` to initilize your project. After you run `npm init`, `npm` will create a `node_modules/` directory that stores installed modules and a `package.json` file that keeps track of the modules you installed as well as basic project settings.

Next, run `npm install express` to install expressjs into your nodejs directory.

### Running the code
`node app.js` OR you can also just do `node app`

OR even better, edit your `package.json` and change the test script to `node app`. Now you can run `npm test` and `npm` will run `node app`. This is best because test scripts
can get to be very compicated so you can save time by aliasing a long test command to `npm test`.
