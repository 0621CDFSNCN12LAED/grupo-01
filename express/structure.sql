DROP DATABASE IF EXISTS tutuni_db;
CREATE DATABASE tutuni_db;
USE tutuni_db;

CREATE TABLE category(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoryName VARCHAR(30) NOT NULL
    
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    roleName  VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(1000) NOT NULL,
    price DECIMAL NOT NULL,
    discount TINYINT NOT NULL DEFAULT 0,
    size TEXT NOT NULL,
    description TEXT NOT NULL,
    stock INT NOT NULL,
    shipping VARCHAR(150) NOT NULL,
    deleted BIT(1) NOT NULL DEFAULT 0,
    --   verdadero 1, falso 0
    categoryId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES category(id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    adress VARCHAR(300) NOT NULL,
    image VARCHAR(100) NOT NULL,
    password VARCHAR(150) NOT NULL,
    deleted BIT(1) NOT NULL DEFAULT 0,
    rolesId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rolesId) REFERENCES roles(id)
);

CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT,
  status VARCHAR(30) NOT NULL,
  userId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
  );


CREATE TABLE cart_product (
  id INT NOT NULL AUTO_INCREMENT,
  priceUnit DECIMAL NOT NULL,
  quantity INT NOT NULL, 
  productId INT NOT NULL,
  cartId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (cartId) REFERENCES carts(id)
); 

CREATE TABLE product_user_fav(
  id INT NOT NULL AUTO_INCREMENT,
  productId INT NOT NULL,
  userId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (productId) REFERENCES products(id),
  FOREIGN KEY (userId) REFERENCES users(id)
); 


INSERT INTO roles
VALUES
(default, "guest"),
(default, "admin");

INSERT INTO category
VALUES
(default, "Remera"),
(default, "Pantalon"),
(default, "Abrigo"),
(default, "Calzado"),
(default, "Moda Intima"),
(default, "Accesorios");


INSERT INTO users(id, fullName, username, email, birthdate, adress, password, deleted, rolesId)
VALUES
(default,"Salvador Carou","sal","salvadorcarou@gmail.com", "2200-02-20", "Munro", "$2a$10$Th5CDYUB0EM2Xg88yIoGjeyIo6B6rCIy/fIK0qBvOOuYfcFGx67Z6", 0, 2);

INSERT INTO products
VALUES
(default,"Remera Negra", "image-1634588336912.jpg", 2500, 10, "medium", "Esta es una remera Negra 2.0", 5, "Envio-gratis", 0, 1);



