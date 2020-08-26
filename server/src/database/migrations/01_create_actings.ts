import Knex from 'knex';

export async function up(knex: Knex){
    // CRIA A TABELA
    return knex.schema.createTable('actings', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex){
    // DELETA A TABELA (VOLTA ATRAS)
    return knex.schema.dropTable('actings');
}