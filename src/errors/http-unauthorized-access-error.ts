import { HTTPError } from './http-error';
import { HTTPStatusCode } from '../enums/http-status-code';
import { HTTPErrorType } from '../enums/http-error-type';

export class HTTPUnauthorizedAccessError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHORISED_ACCESS;
  public type: HTTPErrorType = HTTPErrorType.UNAUTHORISED_ACCESS;
}
