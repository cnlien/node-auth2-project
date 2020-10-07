const knex = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return knex("users")
    .select("id", "username", "department")
    .orderBy("id");
}

function findBy(filter) {
  return knex("users")
    .where(filter)
    .orderBy("id");
}

async function add(user) {
  try {
    const [id] = await knex("users").insert(user, "id");
    return findById(id);
  }
  catch (error) {
    throw error;
  }
}

function findById(id) {
  return knex("users").where({ id }).first();
}
