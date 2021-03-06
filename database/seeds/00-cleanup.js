
const cleaner = require("knex-cleaner");

function cleanTables(knex) {
  return cleaner
    .clean(knex, {
      mode: "truncate",
      restartIdentity: true,
      ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    })
    .then(() => console.log("\n== All tables truncated, ready to seed ==\n"));
}

exports.seed = function (knex) {
  knex.client.config.client === "sqlite3"
    ? knex.raw("PRAGMA foreign_keys = OFF;").then(() => cleanTables(knex))
    : cleanTables(knex);
}