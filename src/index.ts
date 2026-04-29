import express from 'express';
import helmet from 'helmet';

import { config } from './config/server.config.ts';
import { router } from './routes/main.route.ts';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

server.use('/api', router);

server.listen(config.port, () => console.log(`Server runner on http://localhost:${config.port}`));