drop database if exists eventdb;

create database eventdb;

use eventdb;

create table events (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(50),
    location varchar(50),
    date varchar(15),
    time varchar(6),
    category varchar(15),
    favorite boolean,
    PRIMARY KEY (id)
);

insert into events (name, location, date, time, category, favorite) values ('Lorna shore', 'House of Blues', 'Nov 17 2022', '7:00pm', 'Music', false); 
insert into events (name, location, date, time, category, favorite) values ('LAKEYAH', 'Magic Stick', 'Nov 17 2022', '7:00pm', 'Music', false);
insert into events (name, location, date, time, category, favorite) values ('Guster', 'St. Andrews Hall', 'Nov 18 2022', '7:00pm', 'Music', false);
insert into events (name, location, date, time, category, favorite) values ('EMO PROM', 'The Magic Bag', 'Nov 19 2022', '8:00pm', 'Music', false);
insert into events (name, location, date, time, category, favorite) values ('Streetlight Manifesto', 'Angora Theatre', 'Nov 20 2022', '7:00pm', 'Music', false);
