const db = require('../db-config');

module.exports = {
    postComment,
    getComments,
    deleteComment
};

function postComment(comment) {
    return db('comments')
        .insert(comment)
};

function getComments() {
    return db('comments');
};

function deleteComment(id) {
    return db('comments')
        .where({ id })
        .delete()
}