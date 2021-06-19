# init 

npm init -y

npm install @hapi/hapi dotenv joi nanoid node-pg-migrate pg

npm install eslint nodemon --save-dev

npx eslint --init

# postgres

psql --username postgres

CREATE USER developer WITH ENCRYPTED PASSWORD 'supersecretpassword';

CREATE DATABASE songsdb;

GRANT ALL PRIVILEGES ON DATABASE songsdb TO developer;

\q

psql --username developer --dbname songsdb

TRUNCATE songs;

# crate migration file

npm run migrate create "create table songs"

npm run migrate up