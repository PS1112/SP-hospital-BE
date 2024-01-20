# SP-hospital-BE
this repo has api,s for SP-hospital project

project link (SP-Hospital): https://sp-hospital345.web.app/


### Getting Started

Read full document before getting started with this project.

structure for env:
APP_PORT = port on which you want your project to run
DB_PORT = port on which your db connection will be setted up
DB_HOST = host which will be localhost on your local machine and it will depend where you host your db for production
DB_USER = username which you are using for your mysql 
DB_PASS = password for your mysql
DB_NAME = database name
JWT_SECRET = could be anything (alphanumeric including special characters)

you need to create two env,s one for your local machine and one for your production

also in package.json you have different commands for running your project on your local machine and production.

  "scripts": {
    "start:dev": "set \"NODE_ENV=dev\" && nodemon server.js",
    "start:prod": "set \"NODE_ENV=prod\" && nodemon server.js"
  },

For db structure refer to: https://dbdiagram.io/d/SP-Hospital-db-65a03cf4ac844320aebdb691
For MySql Queries refer to: https://docs.google.com/document/d/1PvBHstFuTCPs8I2AYTBLelIPUABsTylDJiEtoeNx6HA/edit?usp=sharing

for any further queries: 
  🔗: https://www.linkedin.com/in/piyush-rajput-861ab0233/

### Prerequisites

You need to install following tools before setting up the project:
🔘 node JS
    link for installation:  
      on windows: https://www.geeksforgeeks.org/installation-of-node-js-on-windows/
      on ubuntu: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
      on MACos: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
      generic: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
🔘 MySql 
    link for installation:
      generic: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/ 
      <!-- you will find links for installation for all three os in above link -->
     

### Installation

A step-by-step guide on how to install and set up the project on a local machine.
After completing prerequisites you can:

```bash
git clone https://github.com/PS1112/SP-hospital-BE.git
cd SP-hospital-BE
npm install

