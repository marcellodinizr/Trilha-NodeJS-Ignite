import express from 'express';
import swaggerUI from 'swagger-ui-express';

import './database';
import { router } from './routes';
import './shared/container';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Server started on port 3333'));
