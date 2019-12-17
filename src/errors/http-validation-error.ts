import { HTTPError } from './http-error';
import { BAD_REQUEST } from '../utils/error-types';

/**
 * HTTP Bad Request Error. Extended specifically the client data is found inappropriate at the time of initial validation.
 * Sets the http status to 400.
 */
export class HTTPValidationError extends HTTPError {
  public status = BAD_REQUEST.status;
  public type = BAD_REQUEST.type;
}
