import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);
// eslint-disable-next-line no-console
console.log('Server listening on port 3000');
