import { Http } from '../protocols/http-controller';

export function ok<T = null>(entity?: T): Http.Response<T> {
  return {
    status: Http.StatusCode.Ok,
    body: entity,
  };
}

export function created<T = null>(entity?: T): Http.Response<T> {
  return {
    status: Http.StatusCode.Created,
    body: entity,
  };
}
