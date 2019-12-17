import { HTTPError } from './http-error';
import { ROUTE_NOT_FOUND } from '../utils/error-types';

/**
 * HTTP Resource Not Found Error. Extended specifically for Routes.
 * Sets the http status to 404.
 */
export class HTTPRouteNotFoundError extends HTTPError {
  public status = ROUTE_NOT_FOUND.status;
  public type = ROUTE_NOT_FOUND.type;
}
