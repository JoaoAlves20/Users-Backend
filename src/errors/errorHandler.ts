import type { RequestHandler, ErrorRequestHandler } from "express";

export const notFoundRequest: RequestHandler = (_, response) => {
    response.status(404).json({ error: 'Route not found' });
}

export const errorHandler: ErrorRequestHandler = (error, _, response) => {
    console.error('DEU RUIM', error);
    response.status(500).json({ error: 'INTERNAL SERVER ERROR' });
}