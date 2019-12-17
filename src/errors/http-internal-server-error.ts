import { HTTPError } from './http-error';
import { INTERNAL_SERVER_ERROR } from '../utils/error-types';

/**
 * HTTP Internal Server Error. For all the errors that could occur if something goes wrong on the Backend.
 * Sets the http status to 500.
 */
export class HTTPInternalServerError extends HTTPError {
  public status = INTERNAL_SERVER_ERROR.status;
  public type = INTERNAL_SERVER_ERROR.type;
}
