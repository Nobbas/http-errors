import { HTTPError } from './http-error';
import { BAD_REQUEST } from '../utils/error-types';

export class HTTPBadRequestError extends HTTPError {
  public status = BAD_REQUEST.status;
  public type = BAD_REQUEST.type;
}
