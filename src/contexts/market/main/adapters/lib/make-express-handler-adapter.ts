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
      const params: Http.Param = {};
      for (const requestParam in request.params) {
        params[requestParam] = request.params[requestParam]
      }
      const controllerResponse = await controller.handle({
        params,
        body: request.body,
      });
      response.status(controllerResponse.status).json(controllerResponse.body);
    } catch (error) {
      logger.error(error);

      if (error.name === AppError.name) {
        const {name, ...appError} = error as AppError;
        return response.status(appError.status).json(appError);
      }

      return response.status(Http.StatusCode.InternalServerError).json({
        message: error.message,
      });;
    }
  };
};
