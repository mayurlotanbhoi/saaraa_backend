# MEGHRANJAN_Assignment_server

creat data base in ur localhost mysql

run this commands

create database cart;
use cart;
CREATE TABLE cart (
  imageLink VARCHAR(200),
  ProductName VARCHAR(200),
  ProductPrice INT,
  ProductColor VARCHAR(200),
  ProductSize INT
);

all apis in colltroller folder
steps for running server

1) run npm i command in ur terminal
2) run npm start command in ur terminal

post api http://localhost:5000/user/addCardDetails
get api http://localhost:5000/user/getProductDetails
