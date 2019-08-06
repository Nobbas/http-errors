import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPRouteNotFoundError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.ROUTE_NOT_FOUND;
  public type: HTTPErrorType = HTTPErrorType.ROUTE_NOT_FOUND;
}
