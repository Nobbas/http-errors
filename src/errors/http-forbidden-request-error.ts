import { HTTPError } from './http-error';
import { FORBIDDEN } from '../utils/error-types';

/**
 * HTTP Forbidden Request Error.
 * Sets the http status to 403.
 */
export class HTTPForbiddenRequestError extends HTTPError {
  public status = FORBIDDEN.status;
  public type = FORBIDDEN.type;
}
