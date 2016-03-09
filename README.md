# SkeletonForExpressWeb

# Setup Env

	```sh
	$ grunt setup
	```
# Startup app

	```sh
	$ npm start
	```

# How to generate the whole project.

	Generate source skeleton with express4

	```sh
	$ express -e SkeletonForExpressWeb
	$ cd SkeletonForExpressWeb && npm install
	```

	Init bower to manage package dependence

	```sh
	$bower init
	$bower install bootstrap --save
	```

	Create grunt script *Gruntfile.js* and add some grunt dependence. 

	```sh
	$npm install grunt --save-dev
	$npm install grunt-contrib-clean --save-dev
	$npm install grunt-contrib-concat --save-dev
	$npm install grunt-contrib-copy --save-dev
	$npm install grunt-contrib-cssmin --save-dev
	$npm install grunt-contrib-jshint --save-dev
	$npm install grunt-contrib-uglify --save-dev
	$npm install grunt-contrib-watch --save-dev
	$npm install grunt-exec --save-dev
	$npm install grunt-express-server --save-dev
	$npm install load-grunt-tasks --save-dev
	```

# Reference list

[Grunt](http://gruntjs.com/getting-started)
[Bower](https://github.com/bower/bower)
[nodejs-express4](http://blog.fens.me/nodejs-express4/)
[nodejs-bower-intro](http://blog.fens.me/nodejs-bower-intro/)