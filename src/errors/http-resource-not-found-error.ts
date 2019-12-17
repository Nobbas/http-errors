import { HTTPError } from './http-error';
import { RESOURCE_NOT_FOUND } from '../utils/error-types';

/**
 * HTTP Resource Not Found Error.
 * Sets the http status to 404.
 */
export class HTTPResourceNotFoundError extends HTTPError {
  public status = RESOURCE_NOT_FOUND.status;
  public type = RESOURCE_NOT_FOUND.type;
}
