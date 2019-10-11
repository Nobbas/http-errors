import { HTTPError } from './http-error';
import { INTERNAL_SERVER_ERROR } from '../utils/error-types';

export class HTTPInternalServerError extends HTTPError {
  public status = INTERNAL_SERVER_ERROR.status;
  public type = INTERNAL_SERVER_ERROR.type;
}
