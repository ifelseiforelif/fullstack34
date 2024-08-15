

CREATE DATABASE autocrm;
CREATE TABLE cars(id serial primary key, model varchar(50) not null, year varchar(4) not null,
number varchar(10) not null, color int, type int, isNew boolean,vEngine float);

CREATE TABLE colors(id serial primary key, title varchar(25));
CREATE TABLE types(id serial primary key, title varchar(25));

ALTER TABLE cars ADD CONSTRAINT fk_cars_colors FOREIGN KEY (color) REFERENCES colors(id);

ALTER TABLE cars ADD CONSTRAINT fk_cars_types FOREIGN KEY (type) REFERENCES types(id);

INSERT INTO colors (title) VALUES('green'),('blue'),('black'),('red'), ('yellow');

INSERT INTO types (title) VALUES('hatchback'),('cabriolet'), ('sedan');

INSERT INTO cars(model, year,number, color , type, isNew ,vEngine ) VALUES ('mazda', '2017', 'BH3536', 1,2, true ,1.5 ),
('Toyota Camry', 2020, 'A123B456', 3, 1, true, 2.5),
('Honda Civic', 2018, 'C789D012', 2, 2, true, 1.6),
('Ford Mustang', 2022, 'E345F678', 2, 1, true, 5.0),
('BMW X5', 2019, 'G987H012', 1, 2, true, 3.0),
('Mercedes-Benz C-Class', 2021, 'J123K456', 4, 1, true, 2.0),
('Audi A4', 2017, 'M567N890', 3, 2, true, 2.0),
('Volkswagen Golf', 2023, 'P012Q345', 2, 2, true, 1.5),
('Skoda Octavia', 2019, 'R456S789', 3, 1, true, 1.4),
('Nissan Qashqai', 2020, 'T890U123', 2, 2, true, 2.0),
('Hyundai Tucson', 2018, 'V234W567', 3, 3, true, 1.6);


SELECT "id", "model", "year", "number", "color", "type", "isnew", "vengine" FROM "cars" AS "cars"
