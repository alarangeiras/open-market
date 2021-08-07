import { Request, RequestHandler, Response } from "express";
import { LoggerPort } from "../../../data/ports/logger-port";
import { Http } from "../../../presentation/protocols/http-controller";

export const makeExpressHandlerAdapter = (controller: Http.Controller, logger: LoggerPort):RequestHandler => {
  return async (request: Request, response: Response) => {
    logger.info('calling the controller')
    const controllerResponse = await controller.handle({
      body: request.body,
    })
    response
      .status(controllerResponse.status)
      .json(controllerResponse.body)
  }
}