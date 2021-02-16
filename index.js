const express = require('express');
const postsRouter = require('./posts/posts-Router.js');

const server = express();
const port = 9000;
server.use(express.json());
server.use(cors());

server.use('/api/posts', postsRouter);

server.listen(port, () => {
  console.log(`Access Granted on 9000`);
});
