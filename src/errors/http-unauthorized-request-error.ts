import { HTTPError } from './http-error';
import { UNAUTHORIZED } from '../utils/error-types';

export class HTTPUnauthorizedRequestError extends HTTPError {
  public status = UNAUTHORIZED.status;
  public type = UNAUTHORIZED.type;
}
