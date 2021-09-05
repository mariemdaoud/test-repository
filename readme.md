# Application avec node.js, express, Sequelize, Postgres,  Docker, Postman and mocha

# Clone the repo
$ git clone https://github.com/mariemdaoud/test-repository.git my-project

# Go into app's directory
$ cd my-project

# Install app's dependencies
$ npm install

#  Navigate where the docker-compose.yml is located and build the image 

$ docker-compose build

# To run the database :

$ docker-compose up -d nsp_test_db

# To run the backend (APIS)

$ docker-compose up -d nsp_test_backend
