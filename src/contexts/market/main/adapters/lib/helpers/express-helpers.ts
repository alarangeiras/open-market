import { Http } from '../../../../presentation/protocols/http-controller';
import { Request, Response } from 'express';
import { AppError } from '../../../../domain/errors/app-error';

export const extractPathParams = (request: Request): Http.Param => {
  const params: Http.Param = {};
  for (const requestParam in request.params) {
    params[requestParam] = request.params[requestParam];
  }
  return params;
};

export const extractQueryParams = (request: Request): Http.Query => {
  const resultQueryParams: Http.Query = {};
  for (const queryParam in request.query) {
    resultQueryParams[queryParam] = request.query[queryParam] as string;
  }
  return resultQueryParams;
};

export const createErrorResponse = (
  error: Error,
  response: Response
): Response => {
  if (error.name === AppError.name) {
    const { name, ...appError } = error as AppError;
    return response.status(appError.status).json(appError);
  }

  return response.status(Http.StatusCode.InternalServerError).json({
    message: error.message,
  });
};
