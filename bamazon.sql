DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (

id INTEGER(11) AUTO_INCREMENT NOT NULL,

product_name VARCHAR (45) NULL,

department_name VARCHAR (45) NULL,

price DECIMAL(10,4) NULL,

stock_quantity INT, 

  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HTML & CSS: Design and Build Websites", "Computers and Techonology", 22.50, 100);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("The Very Hungry Caterpillar", "Children's Books", 6.59, 75);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("The Butterfly Garden", "Historical Fiction", 9.98, 65); 

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Brita 34 Ounce Hard Sided Water Bottle", "Water Products", 13.39, 78);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("DB DEGBIT Leak Proof Water Bottle", "Water Products", 14.99, 40); 

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("OBT Jeans", "Wardrobe", 21.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tengfu pants", "Wardrobe", 24.88, 30);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("PolarSpex", "Sunglasses", 12.95, 47);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Retro Optix", "Sunglasses", 1.79, 92);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Chess Game", "Board Games", 10.88, 80);

SELECT * FROM   products




