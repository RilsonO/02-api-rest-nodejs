"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.alterTable('transactions', (table) => {
        table.uuid('session_id').after('id').index();
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.alterTable('transactions', (table) => {
        table.dropColumn('session_id');
    });
}
exports.down = down;
