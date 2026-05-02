import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import { config } from './config/server.config.ts';
import { router } from './routes/main.route.ts';
import { notFoundRequest, errorHandler } from './errors/errorHandler.ts';
import { swaggerSpec } from './config/swagger.ts';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
server.use('/api', router);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(config.port, () => console.log(`Server runner on http://localhost:${config.port}`));