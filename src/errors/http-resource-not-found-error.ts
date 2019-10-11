import { HTTPError } from './http-error';
import { RESOURCE_NOT_FOUND } from '../utils/error-types';

export class HTTPResourceNotFoundError extends HTTPError {
  public status = RESOURCE_NOT_FOUND.status;
  public type = RESOURCE_NOT_FOUND.type;
}
