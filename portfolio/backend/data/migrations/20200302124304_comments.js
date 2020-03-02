exports.up = function(knex) {
    return knex.schema.createTable('comments', tbl => {
        tbl.increments();
        tbl.text('username', 156)
            .unique()
            .notNullable();
        tbl.text('comment', 255)
            .notNullable();
        tbl.timestamp('created_at')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comments');
};
