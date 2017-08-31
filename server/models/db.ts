import bookshelf from '../lib/database';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as knex from 'knex';
import * as path from 'path';

dotenv.config({ path: '.env' });

const dbConfig = knex({
  client: process.env.DB_CONNECTION,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: 'utf8'
  }
});

const Users = bookshelf.Model.extend({
  tableName: 'users',
  journals: () => {
    return this.hasMany(Journals);
  }
});

const Journals = bookshelf.Model.extend({
  tableName: 'journals',
  users: () => {
    return this.belongsTo(Users)
  }
});


export { Users, Journals };
