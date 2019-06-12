import bodyParser from 'body-parser';
import express from 'express';
import 'source-map-support/register'; // stack traces will point to TS files
import router from './routes';

const app = express();

app.use(bodyParser.json({ limit: 1024 * 1000 }));
app.use(router);

export default app;
