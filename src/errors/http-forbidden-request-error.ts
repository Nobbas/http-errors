import { HTTPError } from './http-error';
import { FORBIDDEN } from '../utils/error-types';

export class HTTPForbiddenRequestError extends HTTPError {
  public status = FORBIDDEN.status;
  public type = FORBIDDEN.type;
}
