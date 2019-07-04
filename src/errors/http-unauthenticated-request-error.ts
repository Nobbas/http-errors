import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPUnauthenticatedRequestError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHENTICATED_REQUEST;
  public type: HTTPErrorType = HTTPErrorType.UNAUTHENTICATED_REQUEST;
}
