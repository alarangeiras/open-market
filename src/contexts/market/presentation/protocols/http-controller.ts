export namespace Http {
  export enum StatusCode {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    PreconditionFailed = 412,
    InternalServerError = 500,
  }

  export type Headers = {
    [key: string]: string;
  };

  export type Param = {
    [key: string]: string;
  };

  export type Query = {
    [key: string]: string;
  };

  export type Request<T = any> = {
    params?: Param;
    query?: Query;
    headers?: Headers;
    body?: T;
  };

  export type Response<T = any> = {
    status: StatusCode;
    headers?: Headers;
    body?: T;
  };

  export interface Controller {
    handle(request: Request): Promise<Response>;
  }

  export type ErrorPayload = {
    status: StatusCode;
    message: string;
    errors?: string[];
  };
}
