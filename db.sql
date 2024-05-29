-- crear la database
create database crudnodejsmysql;

use crudnodejsmysql;

create table tbl_usuarios
(
id INT(6) UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
placa VARCHAR (10) NOT NULL,
tipovehiculo VARCHAR (16) NOT NULL,
telefono VARCHAR(15) NOT NULL
);

SHOW TABLES;

describe tbl_usuarios;