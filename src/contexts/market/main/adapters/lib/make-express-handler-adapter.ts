import { Request, RequestHandler, Response } from 'express';
import { LoggerPort } from '../../../data/ports/logger-port';
import { Http } from '../../../presentation/protocols/http-controller';
import {
  createErrorResponse,
  extractPathParams,
  extractQueryParams,
} from './helpers/express-helpers';

export const makeExpressHandlerAdapter = (
  controller: Http.Controller,
  logger: LoggerPort
): RequestHandler => {
  return async (request: Request, response: Response) => {
    try {
      logger.info(`calling the controller ${controller}`);
      const params = extractPathParams(request);
      const query = extractQueryParams(request);
      const controllerResponse = await controller.handle({
        params,
        query,
        body: request.body,
      });
      return response
        .status(controllerResponse.status)
        .json(controllerResponse);
    } catch (error) {
      logger.error(error);
      return createErrorResponse(error, response);
    }
  };
};
