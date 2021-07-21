# v1

## init 

npm init -y

npm install @hapi/hapi dotenv joi nanoid node-pg-migrate pg

npm install eslint nodemon --save-dev

npx eslint --init

## postgres

psql --username postgres

CREATE USER developer WITH ENCRYPTED PASSWORD 'supersecretpassword';

CREATE DATABASE songsdb;

GRANT ALL PRIVILEGES ON DATABASE songsdb TO developer;

\q

psql --username developer --dbname songsdb

TRUNCATE songs;

## crate migration file

npm run migrate create "create table songs"

npm run migrate up

# v2

## users + auth

npm run migrate create "create table users"

npm run migrate up

npm install bcrypt

npm run migrate create "create table authentications"

npm run migrate up

npm install @hapi/jwt

node 

require('crypto').randomBytes(64).toString('hex');

truncate songs, users, authentications;

## playlist + collaborator + playlist-song

npm run migrate create "create table playlists"

npm run migrate up

npm run migrate create "create collaborations table"

npm run migrate up

npm run migrate create "create playlistsongs table"

npm run migrate up

truncate songs, users, authentications, playlists, collaborations, playlistsongs;

# v3

npm install amqplib @hapi/inert redis

# testing

drop table authentications,collaborations,pgmigrations,playlists,playlistsongs,songs,users;

truncate authentications,collaborations,pgmigrations,playlists,playlistsongs,songs,users;
