# Readme

1. sudo npm install express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator

2. sudo npm i -D --save nodemon

* add npm script to package.json

```json
 "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
  },
  ```
* then use 'npm run server' to run nodemon too

## connecting to MongoDB with mongoose

* if error connecting: For some reason, it cannot find the react-scripts module. The best way to go about resolving this is by reinstalling react-scripts by doing npm i -S react-scripts
* To connect using the mongo shell:
mongo ds113482.mlab.com:13482/devconnector -u <dbuser> -p <dbpassword>
To connect using a driver via the standard MongoDB URI (what's this?):

mongodb://<dbuser>:<dbpassword>@ds113482.mlab.com:13482/devconnector

mongodb://<mot>:<a99Qr6>@ds113482.mlab.com:13482/devconnector

## Express router

* 3 main resources, users, profiles and posts
* 