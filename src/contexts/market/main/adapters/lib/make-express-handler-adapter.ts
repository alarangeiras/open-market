import { Request, RequestHandler, Response } from 'express';
import { LoggerPort } from '../../../data/ports/logger-port';
import { AppError } from '../../../domain/errors/app-error';
import { Http } from '../../../presentation/protocols/http-controller';

export const makeExpressHandlerAdapter = (
  controller: Http.Controller,
  logger: LoggerPort
): RequestHandler => {
  return async (request: Request, response: Response) => {
    try {
      logger.info('calling the controller');
      const controllerResponse = await controller.handle({
        body: request.body,
      });
      response.status(controllerResponse.status).json(controllerResponse.body);
    } catch (error) {
      logger.error(error);

      response.json({
        message: error.message,
      });

      if (error.name === AppError.name) {
        const appError = error as AppError;
        return response.status(appError.status);
      }

      response.status(Http.StatusCode.InternalServerError);
    }
  };
};
