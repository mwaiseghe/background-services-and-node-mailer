CREATE DATABASE mail_users;

USE mail_users;

CREATE TABLE users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_verified bit NOT NULL DEFAULT 0,
);

