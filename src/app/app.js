import express from 'express';

const server = express();

server.use(express.json());

server.get('', (req, res) => res.json({ message: 'blabla' }));

server.listen(3000);

// eslint-disable-next-line no-console
console.log('Server listening on port 3000');
