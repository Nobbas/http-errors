import { HTTPError } from './http-error';
import { ROUTE_NOT_FOUND } from '../utils/error-types';

export class HTTPRouteNotFoundError extends HTTPError {
  public status = ROUTE_NOT_FOUND.status;
  public type = ROUTE_NOT_FOUND.type;
}
