import Knex from 'knex';

export async function up(knex: Knex){
    // CRIA A TABELA
    return knex.schema.createTable('point_actings', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('acting_id').notNullable().references('id').inTable('actings');
    })
}

export async function down(knex: Knex){
    // DELETA A TABELA (VOLTA ATRAS)
    return knex.schema.dropTable('point_actings');
}