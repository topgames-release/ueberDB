'use strict';

const postgres = require('./postgres_db');

// Deprecated. Use `postgres` instead.
exports.Database = postgres.Database;
