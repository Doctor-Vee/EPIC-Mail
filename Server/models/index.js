import pool from './db';
import createQuery from './createTables';
import dropQuery from './dropTables';

const queries = `${dropQuery}${createQuery}`;

pool.query(queries, (err) => {
  console.error(err);
  pool.end();
});
