CREATE DATABASE IF NOT EXISTS openmarket;

CREATE TABLE IF NOT EXISTS market (
  id integer primary key auto_increment,
  name varchar (100),
  neighborhood varchar(50),
  district varchar(30),
  region varchar(20)
);