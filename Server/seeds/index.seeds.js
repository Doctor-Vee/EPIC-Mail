import pool from '../models/db';
import createSeedsQuery from './createSeeds';
import dropTablesQuery from '../models/dropTables';
import createTablesQuery from '../models/createTables';

const queries = `${dropTablesQuery}${createTablesQuery}${createSeedsQuery}`;

pool.query(queries, (err) => {
  console.log(err);
  pool.end();
});
