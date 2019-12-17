import { HTTPError } from './http-error';
import { UNAUTHORIZED } from '../utils/error-types';

/**
 * HTTP Unauthorised Request Error.
 * Sets the http status to 401.
 */
export class HTTPUnauthorizedRequestError extends HTTPError {
  public status = UNAUTHORIZED.status;
  public type = UNAUTHORIZED.type;
}
