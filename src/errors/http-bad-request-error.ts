import { HTTPError } from './http-error';
import { BAD_REQUEST } from '../utils/error-types';
import { HTTPStatus } from '../models/models';

export class HTTPBadRequestError extends HTTPError {
  public status: HTTPStatus = BAD_REQUEST.status;
  public type: string = BAD_REQUEST.type;
}
