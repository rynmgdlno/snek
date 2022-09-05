import knex from 'knex'

export const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'ryan',
    password: 'LifeofPistachio.27',
    database: 'snek'
  }
})