DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT ,
    name varchar(30) NOT NULL,
    good BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);