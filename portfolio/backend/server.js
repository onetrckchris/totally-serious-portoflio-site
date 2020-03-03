const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const commentModel = require('./models/commentModel');

const port = 5000;

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    return commentModel.getComments()
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal Server Error!' });
        })
})

server.post('/comment', (req, res) => {
    return commentModel.postComment(req.body)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal Server Error!' });
        })
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});