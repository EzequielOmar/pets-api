-- borra la base de datos si ya existe.
DROP DATABASE IF EXISTS petsdb;
-- crea la base de datos de mascotas
CREATE DATABASE petsdb;
-- posicionarse en la base
\c petsdb
-- crea la tabla de mascotas si no existe
CREATE TABLE IF NOT EXISTS Pets
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    descripcion VARCHAR(50),
    sexo CHAR(1) NOT NULL,
    path VARCHAR(25) NOT NULL,
);
-- cambia el dueño a postgresql
ALTER TABLE Pets
    OWNER to postgres;