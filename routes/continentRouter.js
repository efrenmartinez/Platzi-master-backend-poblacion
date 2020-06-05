"use strict";

const continent = require("../controller/continent");

module.exports = [
  // Agregar el continente
  {
    method: "POST",
    path: "/addcontinent",
    handler: continent.createContinent,
  },
  // Listar los continentes
  {
    method: "GET",
    path: "/continents",
    handler: continent.getAllContinents,
  },
  // Buscar un continente por su id
  {
    method: "GET",
    path: "/continent/{id}",
    handler: continent.getContinent,
  },
  // Editar un continente por su id
  {
    method: "PUT",
    path: "/continent/{id}",
    handler: continent.editContinent,
  },
  {
    method: "GET",
    path: "/continent_countries/{continent}",
    handler: continent.query,
  },
  // Eliminar un continente por su id
  {
    method: "DELETE",
    path: "/continent/{id}",
    handler: continent.deleteContinent,
  },
];
