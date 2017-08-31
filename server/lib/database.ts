import * as bookshelf from 'bookshelf';
import * as knex from 'knex';
import * as dotenv from 'dotenv';

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

const Bookshelf = bookshelf(dbConfig);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');

export default Bookshelf;
