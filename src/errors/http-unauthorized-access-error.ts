import { HTTPError } from './http-error';
import { HTTPStatusCode } from '@src/enums/http-status-code';
import { HTTPErrorType } from '@src/enums/http-error-type';

export class HTTPUnauthorizedAccessError extends HTTPError {
  public status: HTTPStatusCode = HTTPStatusCode.UNAUTHORISED_ACCESS;
  public type: HTTPErrorType = HTTPErrorType.UNAUTHORISED_ACCESS;
}
