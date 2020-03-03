const db = require('../db-config');

module.exports = {
    postComment,
    getComments
};

function postComment(comment) {
    return db('comments')
        .insert(comment)
};

function getComments() {
    return db('comments');
};

// function deleteComment(username) {
//     return db('comments')
//         .where()
// }